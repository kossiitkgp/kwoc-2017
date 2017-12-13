# -*- coding: utf-8 -*-
import collections
import sys
import os
import json
from flask import render_template, redirect
from . import config

sys.path.append("kwoc")

app, sess = config.create_app()
sess.init_app(app)

# Load stats.json file
dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])
stats_json = root_dir + '/gh_scraper/stats/stats.json'
with open(stats_json, 'r') as f:
    stats_dict = json.load(f)

# Separate people with non-zero contributions
non_zero_contributions = {}
zero_contributions = {}
for user, userdata in stats_dict.items():
    contribs = 0
    contribs += userdata['no_of_commits']
    contribs += userdata['pr_open']
    contribs += userdata['pr_closed']
    if contribs == 0:
        zero_contributions[user] = userdata
    else:
        non_zero_contributions[user] = userdata

non_zero_contributions = collections.OrderedDict(
    sorted(non_zero_contributions.items(), key=lambda t: t[1]['name']))
zero_contributions = collections.OrderedDict(
    sorted(zero_contributions.items(), key=lambda t: t[1]['name']))
non_zero_contributions.update(zero_contributions)

# Final data
stats_dict = non_zero_contributions


# Define routes
@app.route("/")
def main():
    return render_template('index.html')


@app.route("/stats")
def stats():
    return render_template('stats.html', stats=stats_dict)


@app.route('/stats/<git_handle>')
def user_stats(git_handle):
    git_handle = git_handle.lower()
    if git_handle in stats_dict:
        return render_template('profile.html', **stats_dict[git_handle])
    else:
        return redirect('/stats', code=302)


@app.route("/manuals")
def manuals():
    return render_template('manuals.html')


@app.route("/faq")
def faq():
    return render_template('faq.html')


@app.route("/testimonials")
def testimonials():
    return render_template('testimonials.html')


@app.route("/mentor_form")
def mentor_form():
    return "Registrations have now been closed. See you next year !"
    # return render_template('mentor_form.html')


@app.route("/student_form")
def student_form():
    return "Registrations have now been closed. See you next year !"
    # return render_template('student_form.html')


@app.route("/projects")
def projects():
    return render_template('projects.html')


@app.route("/profile")
def profile():
    return render_template('profile.html')


mentors_json = root_dir + '/gh_scraper/list_of_mentors.json'
with open(mentors_json, 'r') as f:
    list_of_mentors = json.load(f)

hashes_json = root_dir + '/secrets/student_email_username_hashes.json'
with open(hashes_json, 'r') as f:
    hashes = json.load(f)


@app.route("/mid-term")
def mid_term():
    return "Mid-term evaluations have now been closed. You can write to us at kwoc@kossiitkgp.in"
    #     return render_template('mid-term-student.html',
    #                            list_of_mentors=list_of_mentors,
    #                            hashes=hashes)


mentor_ids_json = root_dir + '/secrets/mentor_unique_ids.json'
with open(mentor_ids_json, 'r') as f:
    mentor_ids = json.load(f)

mentor_student_mappings_json = root_dir + '/secrets/mentor_student_mappings.json'
with open(mentor_student_mappings_json, 'r') as f:
    mentor_student_mappings = json.load(f)


@app.route("/mid-term/<mentor_id>")
def mid_term_mentor(mentor_id):
    if mentor_id in mentor_ids:
        mentor = mentor_ids[mentor_id]
        students = mentor_student_mappings.get(mentor, [])
        new_students = []
        for i in students:
            try:
                new_students.append([i[0], stats_dict[i[0].lower()]])
            except KeyError:
                pass
        return render_template('mid-term-mentor.html',
                               mentor_id=mentor_id,
                               mentor=mentor,
                               students=new_students)
    else:
        return redirect("/", code=302)

# # Lines below should not be needed for Python 3
# from imp import reload
# reload(sys)
# try:
#     sys.setdefaultencoding('utf-8')
# except:
#     pass
# # above three lines are IMPORTANT


if __name__ == '__main__' and "RUNNING_PROD" not in os.environ:
    app.run(host='0.0.0.0')
