"""
Module that is used by channels routing config
when handling a web socket connection request or
a non-HTTP based request.

Rather than looking for a view function, channels will
look up for a consumer class instance and call its methods.
"""
import logging
import time

from backbits.bot.bot import ChatBot
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):
    """
    Consumer used by the chat routes to handle
    web socket connections.
    """

    SEND_DELAY = 0.02

    def connect(self):
        """ Accepts any web socket connection. """
        self.accept()

    def disconnect(self, msg):
        pass

    def receive(self, text_data):
        """
        Receives the decoded text data from a web socket connection
        as an object that can be JSON loaded.

        Temp --> returns the same msg back to the original client.
        """
        logging.info("Received new message: %s", text_data)

        bot = ChatBot()

        raw_question = text_data
        answer = bot.answer(raw_question)

        logging.info("Returning answer: %s", answer)

        # sends the signal of the beginning of a new msg
        self.send(r"<start/>")

        # sends letter by letter through the socket connection
        for letter in answer:
            # small delay for a nice effect purposes
            time.sleep(self.SEND_DELAY)

            # actual socket sending
            self.send(letter)
