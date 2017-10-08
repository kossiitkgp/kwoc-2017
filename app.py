# -*- coding: utf-8 -*-

import operator  # To sort the list
import json
import os
import traceback
from flask import Flask, render_template, request
from flask_session import Session
import psycopg2
import requests
from sendgrid_mail import send_mail

# # Lines below should not be needed for Python 3
# from imp import reload
# reload(sys)
# try:
#     sys.setdefaultencoding('utf-8')
# except:
#     pass
# # above three lines are IMPORTANT


try:
    import urlparse
except Exception as e:
    from urllib import parse as urlparse

if "LOCAL_CHECK" in os.environ:
    urlparse.uses_netloc.append("postgres")
    url = urlparse.urlparse(os.environ["DATABASE_URL"])
    conn = psycopg2.connect(
        database=url.path[1:],
        user=url.username,
        password=url.password,
        host=url.hostname,
        port=url.port
    )
    cursor = conn.cursor()

app = Flask(__name__)
sess = Session()


# @app.route("/student-register", methods=['GET', 'POST'])
def student_register(request):
        flag = None
        global conn, cursor
        if "LOCAL_CHECK" not in os.environ:
                msg = "Database Connection cannot be set since you are running website locally"
                msgcode = 0
                return {
                    "web": 'index.html',
                    "flag": "True",
                    "msg": msg,
                    "msgcode": msgcode
                }

        if request.method == "POST":
            form_dict = request.form.to_dict()
            query = r"INSERT INTO student (f_name,l_name,email_id,roll_no,git_handle,commits)" \
                    " values ('{}','{}','{}','{}','{}','{}') "
            query = query.format(
                form_dict["fname"],
                form_dict["lname"],
                form_dict["emailid"],
                form_dict["rollno"],
                form_dict["githubhandle"],
                "0"
            )

            try:
                cursor.execute(query)
                conn.commit()
                mail_subject = "Successfully registered for Kharagpur Winter of Code!"
                mail_body = open('static/files/student_register_mail.txt').read()
                mail_body = mail_body.format(form_dict['fname'])
                mail_check = send_mail(mail_subject, mail_body, form_dict["emailid"])
                if not mail_check:
                    slack_notification("Unable to send mail to the following student:\n{}".format(form_dict))
                flag = "True"
                msg = "{}, You have been successfully registered. Please check your email for instructions."
                msg = msg.format(form_dict["fname"])
                msgcode = 1

                return {
                    "web": 'index.html',
                    "flag": flag,
                    "msg": msg,
                    "msgcode": msgcode
                }
            except psycopg2.IntegrityError:
                    conn.rollback()
                    error_msg = "{}\n\nForm: {}".format(traceback.format_exc(), form_dict)
                    slack_notification(error_msg)
                    flag = "True"
                    msg = "Registration Failed ! User already registered"
                    msgcode = 0

                    return {
                        "web": 'index.html',
                        "flag": flag,
                        "msg": msg,
                        "msgcode": msgcode
                    }
            except Exception:
                    conn.rollback()
                    error_msg = "{}\n\nForm: {}".format(traceback.format_exc(), form_dict)
                    slack_notification(error_msg)
                    flag = "True"
                    msg = "Registration Failed ! Please try again."
                    msgcode = 0
                    return {
                        "web": 'index.html',
                        "flag": flag,
                        "msg": msg,
                        "msgcode": msgcode
                    }


@app.route("/project-register", methods=['GET', 'POST'])
def project_register(request):
    flag = None
    global conn, cursor
    if "LOCAL_CHECK" not in os.environ:
        msg = "Database Connection cannot be set since you are running website locally"
        msgcode = 0
        flag = "True"
        return {"web": 'index.html', "flag": flag, "msg": msg, "msgcode": msgcode}
    if request.method == "POST":
        form_dict = request.form.to_dict()
        form_dict["pdesc"] = form_dict["pdesc"].replace("'", "`")
        form_dict["pname"] = form_dict["pname"].replace("'", "`")
        index = form_dict['plink'].find("github.com/")
        phandle = form_dict['plink'][index + 11:]
        phandleCopy = phandle[:]
        imgURL = getimageURL(phandleCopy.split("/")[0])
        forkno = getforks(phandle)
        watcherno = getwatchers(phandle)
        if imgURL:
            query = r"INSERT INTO project (f_name,l_name,email_id,project_link,project_name,project_handle, " \
                "project_description,image,forkno,watcherno) values ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')"
            query = query.format(form_dict["fname"], form_dict["lname"], form_dict["emailid"], form_dict["plink"],
                                 form_dict["pname"], phandle, form_dict["pdesc"], imgURL, forkno, watcherno)
        else:
            query = r"INSERT INTO project (f_name,l_name,email_id,project_link,project_name,project_handle, " \
                "project_description,image,forkno,watcherno) values ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')"
            gh_img = "http://i.imgur.com/nx6cwcv.png"
            query = query.format(form_dict["fname"], form_dict["lname"], form_dict["emailid"], form_dict["plink"],
                                 form_dict["pname"], phandle, form_dict["pdesc"], gh_img, forkno, watcherno)
        try:
            cursor.execute(query)
            conn.commit()
            mail_subject = "Registered " + form_dict["pname"] + " for KWoC!"
            mail_body = open('static/files/project_register_mail.txt').read()
            mail_body = mail_body.format(form_dict['fname'])
            mail_check = send_mail(mail_subject, mail_body, form_dict["emailid"])
            if not mail_check:
                msg = "Unable to send mail to the following project:\n{}\nGot the follwing error:\n{}"
                slack_notification(msg.format(form_dict, traceback.format_exc()))
            flag = "True"
            msg = "Your project {} has been successfully registered. Please check your email for instructions."
            msg = msg.format(form_dict["pname"])
            msgcode = 1
            return {
                "web": 'index.html',
                "flag": flag,
                "msg": msg,
                "msgcode": msgcode
            }
        except psycopg2.IntegrityError:
            conn.rollback()
            error_msg = "{}\n\nForm: {}".format(traceback.format_exc(), form_dict)
            slack_notification(error_msg)
            flag = "True"
            msg = "Registration Failed ! Project already exists"
            msgcode = 0
            return {
                "web": 'index.html',
                "flag": flag,
                "msg": msg,
                "msgcode": msgcode
            }

        except Exception:
            conn.rollback()
            error_msg = "{}\n\nForm: {}".format(traceback.format_exc(), form_dict)
            slack_notification(error_msg)
            flag = "True"
            msg = "Registration Failed !"
            msgcode = 0
            return {
                "web": 'index.html',
                "flag": flag,
                "msg": msg,
                "msgcode": msgcode
            }


@app.route("/", methods=['GET', 'POST'])
def main():
    if request.method == "POST":
        if "plink" in request.form.to_dict():
            reg_dict = project_register(request)
            return render_template('index.html', flag=reg_dict["flag"], msg=reg_dict["msg"],
                                   msgcode=reg_dict["msgcode"])
        else:
            reg_dict = student_register(request)
            return render_template('index.html', flag=reg_dict["flag"], msg=reg_dict["msg"],
                                   msgcode=reg_dict["msgcode"])
    else:
        return render_template('index.html')


@app.route("/resources")
def resources():
    return render_template('resources.html')


@app.route("/resources/timeline")
def timeline():
    return render_template('timeline.html')


@app.route("/resources/manuals")
def manuals():
    return render_template('manuals.html')


@app.route("/resources/social")
def social():
    return render_template('social.html')


@app.route("/resources/media")
def media():
    return render_template('media.html')


@app.route("/resources/faq")
def faq():
    return render_template('faq.html')


@app.route("/resources/contact")
def contact():
    return render_template('contact.html')


@app.route("/index")
def index():
    return render_template('index.html')


@app.route('/leaderboard/user/<git_handle>', methods=['GET', 'POST'])
def add_message(git_handle):
    return render_template('user.html', handle=git_handle)


@app.route("/leaderboard")
def leaderboard():
    global conn, cursor
    if "LOCAL_CHECK" not in os.environ:
        msg = "Database Connection cannot be set since you are running website locally"
        msgcode = 0
        return render_template('leaderboard.html', flag="True", msg=msg, msgcode=msgcode)
    query = "SELECT * FROM student"
    try:
        cursor.execute(query)
        students_data = list()
        for row in cursor.fetchall():
            if int(row[5]) == 0:
                continue
            students_data.append(dict(git_handle=row[0],
                                      firstName=row[1],
                                      lastName=row[2],
                                      commits=int(row[5])))
        students_data = sorted(students_data, key=operator.itemgetter('commits'), reverse=True)
        return render_template('leaderboard.html', students_data=students_data)
    except Exception:
        conn.rollback()
        flag = "True"
        msg = "Unable to open Leaderboard ! Please try again."
        return render_template("index.html", flag=flag, msg=msg, msgcode=0)


@app.route("/projects")
def projects():
    global conn, cursor
    if "LOCAL_CHECK" not in os.environ:
        msg = "Database Connection cannot be set since you are running website locally"
        msgcode = 0
        return render_template('index.html', flag="True", msg=msg, msgcode=msgcode)
    query = "SELECT * FROM project"
    try:
        cursor.execute(query)
        projectsData = list()
        for index, row in enumerate(cursor.fetchall()):
            if len(row[0]) > 0:
                orgLink = row[4][:row[4].rfind("/")]
                projectsData.append(dict(projectLink=row[4],
                                    projectName=row[5],
                                    projectDescription=row[6],
                                    projectHandle=row[0],
                                    imageURL=row[7],
                                    forkno=row[8],
                                    watcherno=row[9],
                                    email=row[3],
                                    orgLink=orgLink,
                                    name="{} {}".format(row[1], row[2]),
                                    id=index))
        projectsData = sorted(projectsData, key=lambda x: x['projectName'].lower())
        return render_template('projects.html', projectsData=projectsData)
    except Exception:
        conn.rollback()
        flag = "True"
        msg = "Some internal error occured ! Please try again later."
        return render_template("index.html", flag=flag, msg=msg, msgcode=0)


def getimageURL(githubUsername):  # getting the image url from github
    baseQuery = "https://api.github.com/search/users?access_token={}&q=".format(os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
    try:
        query = baseQuery + githubUsername
        response = requests.get(query).json()
        if response["total_count"] == 1:  # checking if a unique user is found
            return response["items"][0]["avatar_url"]
            # return unicode(response["items"][0]["avatar_url"] , "utf-8")
        else:
            slack_notification("Got more than one result for {}".format(githubUsername))
            return False
    except Exception:
        return False


def getforks(projectHandle):
    baseQuery = "https://api.github.com/repos/{}?access_token={}".format(
        projectHandle, os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
    try:
        response = requests.get(baseQuery).json()
        forkNo = response["forks"]
        return forkNo
    except Exception:
        return "-"


def getwatchers(projectHandle):
    baseQuery = "https://api.github.com/repos/{}?access_token={}".format(
        projectHandle, os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
    try:
        response = requests.get(baseQuery).json()
        watcherNo = response["watchers"]
        return watcherNo
    except Exception:
        return "-"


def slack_notification(message):
        headers = {
            "Content-Type": "application/json"
        }
        data = json.dumps({
            "text": "In KWOC Website following error occured:\n{}".format(message)
        })
        r = requests.post(
            os.environ["SLACK_WEBHOOK_URL"], headers=headers, data=data)

        if r.status_code != 200:
                print("in slack_notification: {}".format(r.status_code))
                print(r.text)


app.secret_key = 'kwoc'
app.config['SESSION_TYPE'] = 'filesystem'

sess.init_app(app)
app.debug = True
