# -*- coding: utf-8 -*-
import sys
from imp import reload
reload(sys)
try :
	sys.setdefaultencoding('utf8')
except :
	pass
#above three lines are IMPORTANT

from flask import Flask, render_template, url_for, request, session, redirect
from flask_session import Session
import os
import psycopg2
import traceback
import json
import requests
import sys
from sendgrid_mail import send_mail
from operator import itemgetter #to sort the list 


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
				return {"web": 'index.html' , "flag":"True", "msg":msg,"msgcode":msgcode}

		if request.method == "POST":
				form_dict = request.form.to_dict()
				query = r"INSERT INTO student (f_name,l_name,email_id,roll_no,git_handle,commits) values ('%s','%s','%s','%s','%s','%s') " % (
						form_dict["fname"], form_dict["lname"], form_dict["emailid"], form_dict["rollno"], form_dict["githubhandle"],"0")

				try:
						cursor.execute(query)
						conn.commit()
						mail_subject = "Successfully registered for Kharagpur Winter of Code!"
						#mail_body = 'Hello ' + form_dict["fname"] + '<br>You have been successfully registered for the <b>Kharagpur Winter of Code</b>. ' + \
						#            'Check out the <a href="http://kwoc.kossiitkgp.in/resources">Resources for KWoC</a> now.'
						mail_body = \
						'''
						<table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
								<tr>
								<td bgcolor="#00081F" align="center" style="padding: 40px 0 30px 0;">
										<img src="http://kwoc.kossiitkgp.in/static/img/kwoc_logo.png" width="300" height=auto style="display: block;" />
								</td>
								</tr>
								<tr>
								<td bgcolor="#ffffff">
								<table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center">
								 <tr>
									<td>
									 <b> Hello {0} !</b>
									</td>
								 </tr>
								 <tr>
									<td style="padding: 20px 0 30px 0;">
										<b>You have been successfully registered for the Kharagpur Winter of Code</b>. <br>
										<br><br>
										Kharagpur Winter of Code is one of the many initiatives all around the world for introducing students to Open Source.
										Google organizes <a href="https://en.wikipedia.org/wiki/Google_Summer_of_Code" target="_blank">Google Summer of Code</a>
										every summer where thousands of students apply and get selected in the
										program. They work the entire summer and get paid a handsome reward. While we, sitting at IIT Kharagpur, will be doing
										a similar program, on a very small scale. Throughout December, we’ll be mentoring students new to the open source
										software development world along with other mentors who sign up for the program, helping them to create their first
										Pull Request, and writing their first test suite. After winter, all those students are going to be personally coached
										for Google Summer of Code, and it is going to be easier compared to anytime before.
									</td>
								 </tr>
								 <tr>
									<td>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
										 <tr>
											<td width="260" valign="top">
											 <a href="kwoc.kossiitkgp.in" target="_blank"><div style="border:1px solid #353535; border-radius:5px; color:white; background-color: #008080"">Visit Website</div></a>
											</td>
											<td style="font-size: 0; line-height: 0;" width="20">
											 &nbsp;
											</td>
											<td width="260" valign="top">
											 <a href="kwoc.kossiitkgp.in/resources" target="_blank"><div style="border:1px solid #353535; border-radius:5px; color:white; background-color: #008080"">See Resources</div></a>
											</td>
										 </tr>
										</table>
										<div style="text-align: left">
										<ul>
											<li> <a href="http://kwoc.kossiitkgp.in/resources/social" target="blank">Join the social groups</a>
											<li> Read the <a href="http://kwoc.kossiitkgp.in/resources/manuals" target="_blank">student manual</a>
											<li> The projects will be released on December 1st !
										</ul
										</div>
									</td>
								 </tr>
								</table>
						'''
						mail_body = mail_body.format(form_dict['fname'])
						mail_check = send_mail(
								mail_subject, mail_body, form_dict["emailid"])
						if not mail_check:
								slack_notification("Unable to send mail to the following student :\n{}".format(
										form_dict))
						flag="True"
						msg=form_dict["fname"] + ", You have been successfully registered. Please check your email for instructions."
						msgcode=1
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}
				except psycopg2.IntegrityError:
						conn.rollback()
						error_msg = "{}\n\nForm : {}".format(
								traceback.format_exc(), form_dict)
						slack_notification(error_msg)
						flag="True"
						msg="Registration Failed ! User already registered"
						msgcode=0
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}
				except:
						conn.rollback()
						error_msg = "{}\n\nForm : {}".format(
								traceback.format_exc(), form_dict)
						slack_notification(error_msg)
						flag="True"
						msg="Registration Failed ! Please try again."
						msgcode=0
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}

# @app.route("/project-register", methods=['GET', 'POST'])
def project_register(request):
		flag = None
		global conn, cursor
		if "LOCAL_CHECK" not in os.environ:
				msg = "Database Connection cannot be set since you are running website locally"
				msgcode = 0
				flag="True"
				return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}
		if request.method == "POST":
				form_dict = request.form.to_dict()
				form_dict["pdesc"]=form_dict["pdesc"].replace("'","`")
				form_dict["pname"]=form_dict["pname"].replace("'","`")
				index = form_dict['plink'].find("github.com/")
				phandle = form_dict['plink'][index + 11:]
				phandleCopy = phandle[:]
				imgURL = getimageURL(phandleCopy.split("/")[0])
				forkno = getforks(phandle)
				watcherno = getwatchers(phandle)
				if imgURL :
					query = r"INSERT INTO project (f_name,l_name,email_id,project_link,project_name,project_handle, project_description,image,forkno,watcherno) values ('%s','%s','%s','%s','%s','%s', '%s','%s','%s','%s') " % (
							form_dict["fname"], form_dict["lname"], form_dict["emailid"], form_dict["plink"], form_dict["pname"], phandle, form_dict["pdesc"],imgURL,str(forkno),str(watcherno))
				else :
					query = r"INSERT INTO project (f_name,l_name,email_id,project_link,project_name,project_handle, project_description,image,forkno,watcherno) values ('%s','%s','%s','%s','%s','%s', '%s','%s','%s','%s') " % (
							form_dict["fname"], form_dict["lname"], form_dict["emailid"], form_dict["plink"], form_dict["pname"], phandle, form_dict["pdesc"],"http://i.imgur.com/nx6cwcv.png",str(forkno),str(watcherno))
				try:
						cursor.execute(query)
						conn.commit()
						mail_subject = "Registered " + form_dict["pname"] + " for KWoC!"
						mail_body = \
						'''
						<table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
								<tr>
								<td bgcolor="#00081F" align="center" style="padding: 40px 0 30px 0;">
										<img src="http://kwoc.kossiitkgp.in/static/img/kwoc_logo.png" width="300" height=auto style="display: block;" />
								</td>
								</tr>
								<tr>
								<td bgcolor="#ffffff">
								<table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center">
								 <tr>
									<td>
									 <b> Hello {0} !</b>
									</td>
								 </tr>
								 <tr>
									<td style="padding: 20px 0 30px 0;">
										<b>Thank you for registering your project on Kharagpur Winter of Code</b>. <br>
										<br><br>
										Kharagpur Winter of Code is one of the many initiatives all around the world for introducing students to Open Source.
										Google organizes <a href="https://en.wikipedia.org/wiki/Google_Summer_of_Code" target="_blank">Google Summer of Code</a>
										every summer where thousands of students apply and get selected in the
										program. They work the entire summer and get paid a handsome reward. While we, sitting at IIT Kharagpur, will be doing
										a similar program, on a very small scale. Throughout December, we’ll be mentoring students new to the open source
										software development world along with other mentors who sign up for the program, helping them to create their first
										Pull Request, and writing their first test suite. After winter, all those students are going to be personally coached
										for Google Summer of Code, and it is going to be easier compared to anytime before.
									</td>
								 </tr>
								 <tr>
									<td>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
										 <tr>
											<td width="260" valign="top">
											 <div style="border:1px solid #353535; border-radius:5px;""><a href="kwoc.kossiitkgp.in" target="_blank">Visit Website</a></div>
											</td>
											<td style="font-size: 0; line-height: 0;" width="20">
											 &nbsp;
											</td>
											<td width="260" valign="top">
											 <a href="kwoc.kossiitkgp.in/resources" target="_blank"><div style="border:1px solid #353535; border-radius:5px; color:white; background-color: #008080"">See Resources</div></a>
											</td>
										 </tr>
										</table>
										<div style="text-align: left">
										<ul>
											<li> <a href="http://kwoc.kossiitkgp.in/resources/social" target="blank">Join the social groups</a>
											<li> Read the <a href="http://kwoc.kossiitkgp.in/resources/manuals" target="_blank">mentor manual</a>
											<li> Selected projects will be released on December 1st !
										</ul
										</div>
									</td>
								 </tr>
								</table>
						'''
						mail_body = mail_body.format(form_dict['fname'])
						mail_check = send_mail(
								mail_subject, mail_body, form_dict["emailid"])
						if not mail_check:
								slack_notification("Unable to send mail to the following project :\n{}\nGot the follwing error :\n{}".format(
										form_dict, traceback.format_exc()))
						flag="True"
						msg="Your project " + form_dict["pname"] + " has been successfully registered. Please check your email for instructions."
						msgcode=1
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}
				except psycopg2.IntegrityError:
						conn.rollback()
						error_msg = "{}\n\nForm : {}".format(
								traceback.format_exc(), form_dict)
						slack_notification(error_msg)
						flag="True"
						msg="Registration Failed ! Project already exists"
						msgcode=0
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}

				except:
						conn.rollback()
						error_msg = "{}\n\nForm : {}".format(
								traceback.format_exc(), form_dict)
						slack_notification(error_msg)
						flag="True"
						msg="Registration Failed !"
						msgcode=0
						return {"web": 'index.html' , "flag":flag, "msg":msg,"msgcode":msgcode}

@app.route("/", methods=['GET', 'POST'])
def main():
		if request.method == "POST" :
				if "plink" in request.form.to_dict() :
						reg_dict = project_register(request)
						return render_template('index.html' , flag=reg_dict["flag"] , msg=reg_dict["msg"],msgcode=reg_dict["msgcode"])
				else :
						reg_dict = student_register(request)
						return render_template('index.html' , flag=reg_dict["flag"] , msg=reg_dict["msg"],msgcode=reg_dict["msgcode"])
		else :
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
#    print request.status_code
	# print request.method
	# print request.form.to_dict()
   # imd = request.form

	return render_template('user.html',handle=git_handle)


@app.route("/leaderboard")
def leaderboard():
	global conn, cursor
	if "LOCAL_CHECK" not in os.environ:
			msg = "Database Connection cannot be set since you are running website locally"
			msgcode = 0
			return render_template('leaderboard.html' , flag="True", msg= msg, msgcode = msgcode)
	query="SELECT * FROM student"
	try:
			cursor.execute(query)
			# students_data =[dict(git_handle=row[0],
	 #                  Title=row[1],
	 #                  Picture=row[2],
	 #                  Rating=row[3]) for row in cursor.fetchall()]
			students_data=list()
			for row in cursor.fetchall() :
				if int(row[5]) == 0 :
					continue
				students_data.append(dict(git_handle=row[0],
										firstName=row[1],
										lastName=row[2],
										commits=int(row[5])
										))
			students_data = sorted(students_data, key=itemgetter('commits') , reverse=True) 
			return render_template('leaderboard.html' , students_data=students_data)
	except:
			conn.rollback()
			error_msg = "{}".format(
					traceback.format_exc())
			# slack_notification(error_msg)
			flag="True"
			print (error_msg)
			msg="Unable to open Leaderboard ! Please try again."
			return render_template("index.html",flag=flag , msg=msg,msgcode=0)

@app.route("/projects")
def projects():
	global conn, cursor
	if "LOCAL_CHECK" not in os.environ:
			msg = "Database Connection cannot be set since you are running website locally"
			msgcode = 0
			return render_template('index.html' , flag="True", msg= msg, msgcode = msgcode)
	query="SELECT * FROM project"
	try:
			cursor.execute(query)
			# students_data =[dict(git_handle=row[0],
	 #                  Title=row[1],
	 #                  Picture=row[2],
	 #                  Rating=row[3]) for row in cursor.fetchall()]
			projectsData=list()
			for index,row in enumerate(cursor.fetchall()) :
				if len(row[0])>0:	
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
										name="{} {}".format(row[1],row[2]),
										id=index))
			projectsData = sorted(projectsData, key=lambda x: x['projectName'].lower()) 
			# projectsData = sorted(projectsData, key=itemgetter('projectName')) 
			return render_template('projects.html' , projectsData=projectsData)
	except:
			conn.rollback()
			error_msg = "Unable to generate projects page\n\n {}".format(
					traceback.format_exc())
			print (error_msg)
			# slack_notification(error_msg)
			flag="True"
			print (error_msg)
			msg="Some internal error occured ! Please try again later."
			return render_template("index.html",flag=flag , msg=msg,msgcode=0)


def getimageURL(githubUsername) :  # getting the image url from github 
	baseQuery="https://api.github.com/search/users?access_token={}&q=".format(os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
	try :
		query = baseQuery+githubUsername 
		print (query)
		response=requests.get(baseQuery+githubUsername).json()
		if response["total_count"] == 1 :  # checking if a unique user is found
			return response["items"][0]["avatar_url"]
			# return unicode(response["items"][0]["avatar_url"] , "utf-8")
		else :
			slack_notification("Got more than one result for {}".format(githubUsername))
			return False 
	except :
		print ("Unable to retrive image url for {}\nGot following error :{}".format(githubUsername,traceback.format_exc()))
		# slack_notification("Unable to retrive image url for {}\nGot following error :{}".format(githubUsername,traceback.format_exc()))
		return False 

def getforks(projectHandle):
	baseQuery="https://api.github.com/repos/{}?access_token={}".format(projectHandle,os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
	try :
		response = requests.get(baseQuery).json()
		forkNo = response["forks"]
		return forkNo
	except :
		return "-"

def getwatchers(projectHandle):
	baseQuery="https://api.github.com/repos/{}?access_token={}".format(projectHandle,os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
	try :
		response = requests.get(baseQuery).json()
		watcherNo = response["watchers"]
		return watcherNo
	except :
		return "-"

def slack_notification(message):
		headers = {
				"Content-Type": "application/json"
		}
		data = json.dumps({
				"text": "In KWOC Website following error occured :\n{}".format(message)
		})
		r = requests.post(
				os.environ["SLACK_WEBHOOK_URL"], headers=headers, data=data)

		if r.status_code != 200:
				print("in slack_notification : {}".format(r.status_code))
				print(r.text)
app.secret_key = 'kwoc'
app.config['SESSION_TYPE'] = 'filesystem'

sess.init_app(app)
app.debug = True
