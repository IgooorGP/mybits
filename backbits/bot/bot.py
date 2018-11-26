"""
Module with some basic intelligence for the chat bot
in order to answer some questions about me.
"""
import logging
import random
import re

from fuzzywuzzy import fuzz, process

from backbits.bot.brain import BOT_BRAIN, DUNNO_ANSWERS


class ChatBot:
    """
    Class that represents the bot intelligence.
    """

    PREDICTION_THRESHOLD = 75

    def __init__(self):
        """
        Builds a bot instance by inserting it's brain intelligence.
        to answer questions.
        """
        self.brain = BOT_BRAIN
        self.brain_question_choices = BOT_BRAIN.keys()

    def _get_clean_question_input(self, raw_question):
        """
        Takes a question string and cleans it.

        Args:
            raw_question (str): a raw question of the user to be cleaned.

        Returns:
            (str): The cleaned question to be analyzed.
        """
        re_whitespace_pattern = r"[\r\\n]+"
        re_doublequote_pattern = r"\""

        no_whitespace_question = re.sub(
            re_whitespace_pattern, " ", raw_question
        )

        cleaned_question = re.sub(
            re_doublequote_pattern, "", no_whitespace_question
        )

        return cleaned_question

    def _get_question_predictions(self, question):
        """
        Computes the question that is most related to the user's 
        original question.

        Args:
            question (str): the cleaned question of the user input

        Returns:
            (str): The predicted question by fuzzy wuzzy.
        """
        # invokes fuzzy with a given scorer
        predicted_question, prediction_ratio = process.extractOne(
            question, self.brain_question_choices
        )

        return (predicted_question, prediction_ratio)

    def _get_random_dunno_answer(self):
        """
        Returns a randomized answer when the bot doesn't understand
        the user question.

        Returns:
            (str): The randomized dunno answer.
        """
        max_index = len(DUNNO_ANSWERS) - 1
        random_index = random.randint(0, max_index)  # exclusive

        return DUNNO_ANSWERS[random_index]

    def answer(self, raw_question):
        """
        Computes the bot answer by first cleaning the user input
        and then performing the string matching algorithms with
        fuzzywuzzy.

        Args:
            raw_question (str): The user input question

        Returns:
            (str): The computed bot answer.
        """
        question = self._get_clean_question_input(raw_question)

        predicted_question, prediction_ratio = self._get_question_predictions(
            question
        )

        logging.info(
            "predicted question: %s, ratio; %s",
            predicted_question,
            prediction_ratio,
        )

        if prediction_ratio < self.PREDICTION_THRESHOLD:
            return self._get_random_dunno_answer()

        return self.brain[predicted_question]

