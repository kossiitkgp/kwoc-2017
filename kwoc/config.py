# -*- coding: utf-8 -*-
from flask import Flask
from flask_session import Session
# from . import models

TEMPLATE_DIR = '../templates'

STATIC_DIR = '../static'

APP_SECRET_KEY = 'kwoc'

APP_CONFIG_SESSION_TYPE = 'filesystem'

APP_DEBUG = True


def create_app():
    app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)
    app.secret_key = APP_SECRET_KEY
    app.config['SESSION_TYPE'] = APP_CONFIG_SESSION_TYPE
    app.debug = APP_DEBUG

    sess = Session()

    # models.estabilish_connection()

    return app, sess
