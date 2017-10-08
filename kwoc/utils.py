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
    headers = {"Content-Type": "application/json"}
    data = json.dumps({
        "text": "In KWOC Website following error occured:\n{}".format(message)
    })
    r = requests.post(os.environ["SLACK_WEBHOOK_URL"], headers=headers, data=data)

    if r.status_code != 200:
        print("in slack_notification: {}".format(r.status_code))
        print(r.text)
