import requests as rq

CLIENT_ID = "f50844d4efc205823232"
CLIENT_SECRET = "7aa71b9a99ba2f325d76e68659c51a2368166a8f"

def ret_auth_url():
    auth_url = "https://github.com/login/oauth/authorize"
    SCOPES = ["user"]

    url = auth_url+'?'+"client_id="+CLIENT_ID+'&'+'scope='+SCOPES[0]
    if len(SCOPES) > 1:
        for scope in SCOPES[1:]:
            url += '+'+scope
    
    url+= '&access_type=offline&response_type=code'
    return url

def ret_token(code):
    token_url = "https://github.com/login/oauth/access_token"
    payload = {}
    payload["client_id"], payload["client_secret"],payload["code"] = CLIENT_ID, CLIENT_SECRET, code
    return rq.post(token_url,payload).content.decode().split("&")[0].split("=")[-1]

if __name__ == '__main__':
    print(ret_auth_url())