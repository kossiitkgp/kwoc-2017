# -*- coding: utf-8 -*-
import sys
from imp import reload
reload(sys)
sys.setdefaultencoding('utf8')
#above three lines are IMPORTANT

import psycopg2
import requests
import os
import traceback
try:
		import urlparse
except Exception as e:
		from urllib import parse as urlparse

import utils

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

def updateProjectImage():
	global conn, cursor
	if "LOCAL_CHECK" not in os.environ:
			msg = "Database Connection cannot be set since you are running website locally"
			print (msg)
	query="SELECT * FROM project"
	try:
		cursor.execute(query)
		# projectsData=list()
		for index,row in enumerate(cursor.fetchall()) :
			if not row[7] :   #checking if a valid image url is already present
				handle=row[0][:]
				imgURL=utils.getimageURL(handle.split("/")[0])
				if imgURL :
					updateQuery = "UPDATE project SET image='%s' WHERE project_handle='%s'" % (imgURL,row[0])
				else :
					updateQuery = "UPDATE project SET image='%s' WHERE project_handle='%s'" % ("http://i.imgur.com/nx6cwcv.png",row[0])
				try :  #updating image URL in the database
					cursor.execute(updateQuery)
					conn.commit()
				except :
					conn.rollback()
					error_msg = "Unable to update image url {} for {}.\nFollowing error occured{}".format(imgURL,row[0],
				traceback.format_exc())
					print (error_msg)
	except:
			conn.rollback()
			error_msg = "Unable to get all projects\n\n {}".format(
					traceback.format_exc())
			print (error_msg)


def updateForkNo():
	global conn, cursor
	if "LOCAL_CHECK" not in os.environ:
			msg = "Database Connection cannot be set since you are running website locally"
			print (msg)
	query="SELECT * FROM project"
	try:
		cursor.execute(query)
		for index,row in enumerate(cursor.fetchall()) :
			if row[1] == "df" and row[2] == "df" :
				continue
			forkno = utils.getforks(row[0])
			updateQuery = "UPDATE project SET forkno='%s' WHERE project_handle='%s'" % (str(forkno),row[0])
			try :  #updating image URL in the database
				cursor.execute(updateQuery)
				conn.commit()
			except :
				conn.rollback()
				error_msg = "Unable to update fork nofor {}.\nFollowing error occured{}".format(row[0],
			traceback.format_exc())
				print (error_msg)
	except:
			conn.rollback()
			error_msg = "Unable to get all projects\n\n {}".format(
					traceback.format_exc())
			print (error_msg)


def updatewatcherNo():
	global conn, cursor
	if "LOCAL_CHECK" not in os.environ:
			msg = "Database Connection cannot be set since you are running website locally"
			print (msg)
	query="SELECT * FROM project"
	try:
		cursor.execute(query)
		for index,row in enumerate(cursor.fetchall()) :
			if row[1] == "df" and row[2] == "df" :
				continue
			watcherno = utils.getwatchers(row[0])
			updateQuery = "UPDATE project SET watcherno='%s' WHERE project_handle='%s'" % (str(watcherno),row[0])
			try :  #updating image URL in the database
				cursor.execute(updateQuery)
				conn.commit()
			except :
				conn.rollback()
				error_msg = "Unable to update watcher no for {}.\nFollowing error occured{}".format(row[0],
			traceback.format_exc())
				print (error_msg)
	except:
			conn.rollback()
			error_msg = "Unable to get all projects\n\n {}".format(
					traceback.format_exc())
			print (error_msg)


if __name__ == "__main__" :
	updatewatcherNo()
