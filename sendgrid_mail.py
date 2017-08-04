# -*- coding: utf-8 -*-
import sys
from imp import reload
reload(sys)
try :
	sys.setdefaultencoding('utf8')
except :
	pass
#above three lines are IMPORTANT

import sendgrid
import os
import sys
from sendgrid.helpers.mail import *
import traceback
import requests 

def send_mail(mail_subject, mail_body, to_email):
	i = 0
	sg = sendgrid.SendGridAPIClient(apikey=os.environ["DEFCON_SENDGRID"])
	from_email = Email("Kharagpur Open Source Society <{}>".format(os.environ["EMAIL"]))
	content = Content("text/html", mail_body)
	to_email = Email(to_email)
	mail = Mail(from_email=from_email, subject=mail_subject, to_email=to_email, content=content)
	try :
		response = sg.client.mail.send.post(request_body=mail.get())
		return True
	except urllib.HTTPError :
		msg= "Got following error while sending mail :{}".format(traceback.format_exc())
		slack_notification(msg)
		return False


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