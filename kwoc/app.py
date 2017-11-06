# -*- coding: utf-8 -*-
import sys
sys.path.append("kwoc")

import os
import controllers
import config

app, sess = config.create_app()
sess.init_app(app)

# Define routes
@app.route("/", methods=['GET', 'POST'])
def main():
    return controllers.main()


@app.route("/index")
def index():
    return controllers.index()


@app.route("/leaderboard")
def leaderboard():
    return controllers.leaderboard()


@app.route('/leaderboard/user/<git_handle>', methods=['GET', 'POST'])
def add_message(git_handle):
    return controllers.add_message(git_handle)


@app.route("/projects")
def projects():
    return controllers.projects()


@app.route("/project-register", methods=['GET', 'POST'])
def project_register():
    return controllers.project_register()


@app.route("/manuals")
def manuals():
    return controllers.manuals()


@app.route("/social")
def social():
    return controllers.social()


@app.route("/faq")
def faq():
    return controllers.faq()


@app.route("/student-register", methods=['GET', 'POST'])
def student_register():
    return controllers.student_register()

@app.route("/testimonials")
def testimonials():
    return controllers.testimonials()


@app.route("/mentor_form")
def mentor_form():
    return controllers.mentor_form()

# # Lines below should not be needed for Python 3
# from imp import reload
# reload(sys)
# try:
#     sys.setdefaultencoding('utf-8')
# except:
#     pass
# # above three lines are IMPORTANT

if __name__ == '__main__' and "RUNNING_PROD" not in os.environ:
    app.run(host='0.0.0.0', port=8080)
