"""
Module with some basic intelligence for the chat bot
in order to answer some questions about me.
"""
from fuzzywuzzy import process


class ChatBot:
    """
    Class that represents the bot intelligence.
    """

    SIMILARITY_PERCENT_THRESHOLD = 0.85

    QUESTIONS = (
        "what's your name",
        "how old are you",
        "how are you",
        "where do you live",
        "are you single",
        "where do you work",
        "what is favorite language",
        "which languages do you speak",
        "what are your hobbies",
        "why did you switch carreers",
        "where did you study",
        "what university course did you study" "what are your experiences",
    )

    GREETINGS = ("hey", "hi", "hello" "what's up", "hey there")

    GOODBYES = ("bye bye", "bye", "goodbye", "see ya", "c ya")

    TAUNTS = ("fuck you", "fuck u", "fag", "loser", "asshole", "dickhead", "bitch", "dipshit", "queer")

    COMPLIMENTS = ("you are pretty", "I love you", "you are sexy", "you look pretty")

    def get_bot_answer(self, question):
        """
        Computes the bot answer.        
        """
        whitespace = "\r\n\t"
        question = question.strip(whitespace)

        pass
