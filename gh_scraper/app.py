import json
import os
import requests
f=open("students.txt","r")
p=open("projects.txt","r")
projects=[]
while(1):
    this_link = p.readline()
    if not this_link: break
    this_link = this_link.split('/')
    this_link = this_link[3]+'/'+(this_link[4].split('.git'))[0]
    projects.append(this_link)
# repos=[]
# openissues=0
# closedissues=0
# openprs=0
# closedprs=0
# itercount=0
all={}
# os.system("git pull --rebase origin master")
while (1):
            name=f.readline()
            if not name: break
            name=name.strip()
            all[name]={}
            all[name]["PR_no"]=0
            all[name]["PR_urls"]=[]
            all[name]["Commit_no"]=0
            all[name]["commit_urls"]=[]
            url = "https://api.github.com/graphql"
            headers = {"Authorization": "Basic "+str(os.environ['OUATH_KEY'])}
            repo_cur=issue_cur=pr_cur="first: 100"
            while (1):
                query = json.dumps({\
                    "query": "query{\
                        user(login: \""+name +"\"){\
                          pullRequests("+str(pr_cur)+" states:MERGED){\
                            edges{\
                                node{\
                                    url createdAt commits(first:100){\
                                        edges{\
                                            node{\
                                                commit{\
                                                    author{\
                                                        user{login}\
                                                    }\
                                                    commitUrl\
                                                }\
                                            }\
                                        }\
                                    }\
                                }\
                            }pageInfo{endCursor hasNextPage}\
                          }\
                        }\
                     }"})
                print("query",query)
                r = requests.post(url, headers=headers, data=query)
                data_dict = json.loads(str(r.content))
                try:
                    next_pr=data_dict['data']['user']['pullRequests']['pageInfo']['endCursor']
                except:
                    next_pr="errored"

                print ("data dict",data_dict)


                if next_pr!="errored":
                    for pr in data_dict['data']['user']['pullRequests']['edges']:
                        try:
                            if pr['node']['createdAt'][:7]=='2017-09':
                                urlhere = pr['node']['url']
                                urlhere = urlhere.split('/')
                                urlhere = urlhere[3]+'/'+(urlhere[4].split('.git'))[0]
                                if urlhere in projects:
                                    all[name]["PR_no"]+=1
                                    all[name]["PR_urls"].append(pr['node']['url'])
                                    for commit in pr['node']['commits']['edges']:
                                        if commit['node']['commit']['author']['user']['login']==name:
                                            all[name]["Commit_no"]+=1
                                            all[name]["commit_urls"].append(commit['node']['commit']['commitUrl'])
                        except: pass
                        if next_pr!=None and data_dict['data']['user']['pullRequests']['pageInfo']['hasNextPage']!=False:
                            pr_cur='first: 100 after:"'+str(next_pr)+'" '
                        else:
                            pr_cur='first: 0'
                
                if (data_dict['data']['user']['pullRequests']['pageInfo']['hasNextPage']==False or next_pr==None): break
                itercount+=1

                    
import os
os.system("clear && clear")
print "All PRs and commits this September:"
print all
# repos=set(repos)
# print repos

# print "before comma: "
# print openissues
# print closedissues
# print openprs
# print closedprs

# def insertcomma(num):
#     length=len(num)
#     count=0
#     while(count<length):
#         if count==1:
#             count+=1; continue
#         if count%2==1:
#             num=num[:length-count]+','+num[length-count:]
#         count+=1
#     return num



# openissues = insertcomma(str(openissues))
# closedissues = insertcomma(str(closedissues))
# openprs = insertcomma(str(openprs))
# closedprs = insertcomma(str(closedprs))

# print "open issues: "+openissues
# print "closed issues: "+closedissues
# print "open prs: "+openprs
# print "closed prs: "+closedprs
# print "repeated: "+str(itercount)

# # import os<!-- Closed issues -->
# lines_of_code=0
# for repo in repos:
#   os.system("git clone --depth 1 "+str(repo)+".git ")
#   os.system("cloc "+str(repo).split('/')[-1]+" > out")
#   f=open("out","r")
#   alltext=f.read()
#   # print alltext
#   # print alltext.split(' ')[-1].split('-')[0]
#   try:
#     lines_of_code+=int(alltext.split(' ')[-1].split('-')[0])
#     os.system("rm -rf "+str(repo.split('/')[-1]))
#   except:
#     pass

# # lines_of_code=str(lines_of_code)
# # print lines_of_code
# lines_of_code = insertcomma(str(lines_of_code))
# print ("lines of code",lines_of_code)

# f=open("index.tmpl","r")
# all_lines=f.read()
# all_lines=all_lines.replace("<!-- Open PRs -->",str(openprs))
# all_lines=all_lines.replace("<!-- Closed PRs -->",str(closedprs))
# all_lines=all_lines.replace("<!-- Open Issues -->",str(openissues))
# all_lines=all_lines.replace(" <!-- Closed issues -->",str(closedissues))
# all_lines=all_lines.replace("<!-- Lines -->",str(lines_of_code))
# f=open("index.html","r")
# all_prev_lines=f.read()
# if all_prev_lines!=all_lines:
#     f=open("index.html","w")
#     f.write(all_lines)
