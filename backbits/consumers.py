"""
Module that is used by channels routing config
when handling a web socket connection request or
a non-HTTP based request.

Rather than looking for a view function, channels will
look up for a consumer class instance and call its methods.
"""

import json

from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    """
    Consumer used by the chat routes to handle
    web socket connections.
    """

    def connect(self):
        """ Accepts any web socket connection. """
        self.accept()

    def disconnect(self):
        pass

    def receive(self, text_data):
        """
        Receives the decoded text data from a web socket connection
        as an object that can be JSON loaded.

        Temp --> returns the same msg back to the original client.
        """
        text_data_json = json.loads(text_data)
        msg = text_data_json["message"]

        # echoes back to client the same msg
        self.send(text_data=json.dumps(msg))
