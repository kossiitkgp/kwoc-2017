import requests

usernames = [
    'orkohunter',
    'pungi-man',
    'debugger22'
]

projects = [
    'kossiitkgp/kwoc-2017',
    'orkohunter/pep8speaks',
    'networkx/networkx'
]

query = "https://api.github.com/repos/{}/commits"

params = {
    'since': '2017-11-21T00:00:00Z',
    'until': '2018-01-01T00:00:00Z'
}

r = requests.get(query.format(projects[0]), params=params) # Change this for every project

commits = fetch_all_pages(r)

def fetch_all_pages(r):
    """
    The number of commits is paginated by GitHub api. This function recursively returns all the commits.
    """
    link = r.headers.get('link', None)
    if link is None:
        return r.json()

    if 'rel="next"' not in link:
        return r.json()
    else:
        next_url = None
        for url in link.split(','):
            if 'rel="next"' in url:
                next_url = url.split(';')[0][1:-1]

        next_r = requests.get(next_url)
        return r.json() + fetch_all_pages(next_r)

# Final data for frontend
students_commits = {}

for commit in commits:
    author = commit['author']['login'].lower()
    if author in usernames:
        html_url = commit['html_url']
        message = commit['commit']['message']

        _api_url_commit = commit['url']
        _commit_info = requests.get(_api_url_commit).json()

        lines_added = _commit_info['stats']['additions']
        lines_removed = _commit_info['stats']['deletions']
        _files_modified = set()

        for f in _commit_info['files']:
            _files_modified.add(f['filename'])

        languages_used = set()
        for f in _files_modified:
            file_ext = '.' + f.split('/')[-1].split('.')[-1]
            lang = d.get(file_ext, None)
            if lang is not None:
                languages_used.add(lang)

        commit_record = {
            'html_url': html_url,
            'message': message,
            'lines_added': lines_added,
            'lines_removed': lines_removed,
            'languages_used': languages_used
        }

        try:
            students_commits[author].append(commit_record)
        except KeyError:
            students_commits[author] = [commit_record]

# Final data for frontend is in students_commits
