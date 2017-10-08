import builtins
import os
import psycopg2

try:
    import urlparse
except Exception as e:
    from urllib import parse as urlparse


def estabilish_connection():
    # Run locally without connecting to the database
    if "RUNNING_PROD" in os.environ:
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

        # Make the objects available across all the modules
        builtins.conn = conn
        builtins.cursor = cursor
