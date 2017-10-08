import requests
import traceback
import json
import os

import utils

def get_commits(username, repo_name):
    '''
    username : 'kshitij10496'
    repo_name : 'kshitij10496/IIKH'
                'sympy/sympy'
    '''
    # total_commits = 0
    # total_additions, total_deletions, total_changes = 0, 0, 0

    # user = g.get_user(username)
    # repo = g.get_repo(repo_name)
    # starting_date = datetime.datetime(2016, 5, 1)
    # ending_date = datetime.datetime(2016, 12, 31)
    # all_commits = repo.get_commits(author=username)#, since=starting_date, until=ending_date)
    # for commit in all_commits:
    #     total_additions += int(commit.stats.additions)
    #     total_deletions += int(commit.stats.deletions)
    #     total_changes += int(commit.stats.total)
    #     total_commits += 1
    # # return total_commits
    # print("Total commits: " + str(total_commits))
    # print("Total additions: " + str(total_additions))
    # print("Total deletions: " + str(total_deletions))
    # print("Total changes: " + str(total_changes))
    query = "https://api.github.com/repos/{}/stats/contributors?access_token={}".format(repo_name,os.environ["DEFCON_GITHUB_AUTH_TOKEN"])
    response = requests.get(query).json()
    commits = 0
    try :
        for data in response :
            if data["author"]["login"].lower() == username.lower() :
                commits+=int(data["total"])
        return commits
    except TypeError :
        msg = "Unable to get commits in {} repo.\nFollowing error occured : {}".format(repo_name,traceback.format_exc())
        utils.slack_notification(msg)
        return 0
