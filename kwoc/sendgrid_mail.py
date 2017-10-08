# -*- coding: utf-8 -*-
# import sys
# from imp import reload
# reload(sys)
# try:
#   sys.setdefaultencoding('utf8')
# except Exception:
#   pass
# #above three lines are IMPORTANT

import sendgrid
import os
from sendgrid.helpers.mail import *
import traceback
import requests

import utils


def send_mail(mail_subject, mail_body, to_email):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ["DEFCON_SENDGRID"])
    from_email = Email("Kharagpur Open Source Society <{}>".format(os.environ["EMAIL"]))
    content = Content("text/html", mail_body)
    to_email = Email(to_email)
    mail = Mail(from_email=from_email, subject=mail_subject, to_email=to_email, content=content)
    try:
        sg.client.mail.send.post(request_body=mail.get())
        return True
    except urllib.HTTPError:
        msg = "Got following error while sending mail :{}".format(traceback.format_exc())
        utils.slack_notification(msg)
        return False



'''Not used, for gmail smtp server
# import gmail
import smtplib
import json
from email.mime.text import MIMEText
import os
import requests
import traceback
import time

def send_mail(mail_subject, mail_body, to_email):
    # credentials = json.load(open('CONFIG', 'r'))
    msg = MIMEText(mail_body)
    msg.set_type("text/html")
    msg['Subject'] = mail_subject
    # print (msg)
    # sending mail
    flag =0
    while True :
        try:
            server = smtplib.SMTP('smtp.gmail.com:587')
            server.starttls()
            server.login(os.environ["EMAIL"],os.environ["PASSWORD"])
            server.sendmail(os.environ["EMAIL"], to_email, msg.as_string())
            server.quit()
            return True
        except :
            flag+=1
            if flag >= 5 :
                utils.slack_notification("Got following error while sending email : \n{}".format(traceback.format_exc()))
                return False
            time.sleep(1)
            # return False
'''
