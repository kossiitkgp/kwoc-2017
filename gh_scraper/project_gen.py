import csv
from copy import *
import operator
f=open("../static/js/projects.tmpl")
all_text = f.read()
f.close()
string=""
# dict_here = \
#  {
#            "title": "Some Big Title",
#            "id": 1,
#            "btnid": 1001,
#            "intro": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
#            "mentor": "sipah00",
#            "coordi":"ankita132",
#            "tag": ['Matlab','Python','cpp','R']
# }

# Sort the projects
with open('projects.csv', "r") as csv_file:
    raw_reader = csv.reader(csv_file)
    header = next(raw_reader, None)
    sorted_data = sorted(raw_reader, key=operator.itemgetter(2))

with open('projects.csv', 'w') as csv_file:
    wr = csv.writer(csv_file, quoting=csv.QUOTE_ALL)
    if header:
        wr.writerow(header)
    wr.writerows(sorted_data)


with open('projects.csv', 'r') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    i=-1
    for row in spamreader:
        i+=1
        if (i==0):
            continue
        name = row[0]
        email = row[1]
        proj_name = row[2]
        proj_desc = row[3]
        link = row[4]
        comm = row[5]
        tags = row[6].split(",")
        new_tags=[]
        proj_desc_small=copy(proj_desc)
        if (len(proj_desc)>160):
            proj_desc_small = proj_desc_small[:157]+"..."
        for tag in tags:
            if str(tag)!="":
                new_tags.append(tag)
        # print (link.split('/'))
        img = "https://github.com/"+link.split('/')[3]+".png?size=50"
        dict_here = \
         {
                   "title": proj_name,
                   "id": i,
                   "btnid": 1000 + i,
                   "intro": proj_desc_small,
                   "intro_full": proj_desc,
                   "mentor": name,
                   "mentor_email": email,
                   "tag": new_tags,
                   "link": link,
                   "comm": comm,
                   "img":  img
        }
        string+=str(dict_here)+",\n"


all_text = all_text.replace("// each",string)
f=open("../static/js/projects.js","w")
f.write(all_text)
f.close()

