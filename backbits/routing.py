"""
Module with the url patterns that are handled 
without the HTTP protocol, e.g., requests that
create web socket connection.
"""
from django.conf.urls import url

import consumers

# url patterns for non-http requests (web socket ones)
websocket_urlpatterns = [url(r"^ws/chat/", consumers.ChatConsumer)]  # uses the consumer
