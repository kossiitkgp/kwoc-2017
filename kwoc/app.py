# -*- coding: utf-8 -*-
import sys
sys.path.append("kwoc")

from flask import render_template
import os
import config

app, sess = config.create_app()
sess.init_app(app)

# Define routes
@app.route("/")
def main():
    return render_template('index.html')


@app.route("/leaderboard")
def leaderboard():
    return "Under Development"


@app.route('/leaderboard/user/<git_handle>', methods=['GET', 'POST'])
def add_message(git_handle):
    return "Under Development"


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
    return render_template('mentor_form.html')

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
