"""
Module with unit tests for the bot module.
"""
from unittest import mock

import pytest

from backbits.bot.bot import ChatBot
from backbits.bot.brain import BOT_BRAIN


@pytest.fixture(scope="module")
def bot():
    return ChatBot()


def test_get_clean_question_input_should_clean_the_input(bot: ChatBot):
    """
    Unit: Asserts ChatBot._get_clean_question_input cleans a raw question.
    """
    raw_question = '''"How old are you?"'''
    expected_clean_question = "How old are you?"

    assert bot._get_clean_question_input(raw_question) == expected_clean_question


@mock.patch("backbits.bot.bot.process")
def test_get_question_predictions_should_return_prediction_and_its_score_mocked(
    mocked_process, bot: ChatBot
):
    """
    Unit: Asserts ChatBot._get_question_predictions predicts the right choice when process is mocked.
    """
    expected_results = "Expected Question", 95
    mocked_process.extractOne.return_value = expected_results

    assert bot._get_question_predictions("Question") == expected_results

    mocked_process.extractOne.assert_called_once_with("Question", BOT_BRAIN.keys())


@mock.patch("backbits.bot.bot.random.randint")
def test_get_random_dunno_answer_should_return_the_first_and_fourth_options(
    mocked_randint, bot: ChatBot
):
    """
    Unit: Asserts ChatBot._get_random_dunno_answer returns the right output when the input question
    is unknown.
    """
    mocked_randint.side_effect = [1, 4]  # two returns

    assert (
        bot._get_random_dunno_answer()
        == "Well.. this is embarassing, but I didn't understand that! Try again, please?"
    )
    assert (
        bot._get_random_dunno_answer()
        == "I Didn't get it! Maybe Igor didn't program me to be that smart... dang!"
    )

    mocked_randint.assert_has_calls([mock.call(0, 4), mock.call(0, 4)])


@mock.patch("backbits.bot.bot.ChatBot._get_clean_question_input")
@mock.patch("backbits.bot.bot.ChatBot._get_question_predictions")
@mock.patch("backbits.bot.bot.ChatBot._get_random_dunno_answer")
def test_answer_should_return_answer_above_prediction_threshold(
    mocked_get_random_dunno_answer,
    mocked_get_question_predictions,
    mocked_get_clean_question_input,
    bot: ChatBot,
):
    """
    Unit: Asserts ChatBot.answer returns an answer when the prediction is ABOVE the threshold.
    """
    mocked_get_clean_question_input.return_value = "what's ur name?"
    mocked_get_question_predictions.return_value = "what's your name", 97

    # based on the what's your name question
    expected_answer = "Hey! My name's Igor! Nice to meet you ^^!"

    assert bot.answer("What's ur name?") == expected_answer

    mocked_get_clean_question_input.assert_called_once_with("What's ur name?")
    mocked_get_question_predictions.assert_called_once_with("what's ur name?")
    mocked_get_random_dunno_answer.assert_not_called()


@mock.patch("backbits.bot.bot.ChatBot._get_clean_question_input")
@mock.patch("backbits.bot.bot.ChatBot._get_question_predictions")
@mock.patch("backbits.bot.bot.ChatBot._get_random_dunno_answer")
def test_answer_should_return_random_dunno_answer_below_prediction_threshold(
    mocked_get_random_dunno_answer,
    mocked_get_question_predictions,
    mocked_get_clean_question_input,
    bot: ChatBot,
):
    """
    Unit: Asserts ChatBot.answer returns a random dunno answer when the prediction is BELOW the threshold.
    """
    mocked_get_clean_question_input.return_value = "some random unknown question?"
    mocked_get_question_predictions.return_value = "what's your name", 45  # kiw
    mocked_get_random_dunno_answer.return_value = (
        "Sorry, I didn't catch that! Repeat please?"
    )

    # based on the what's your name question
    expected_answer = "Sorry, I didn't catch that! Repeat please?"

    assert bot.answer("Some random unknown question?") == expected_answer

    mocked_get_clean_question_input.assert_called_once_with(
        "Some random unknown question?"
    )
    mocked_get_question_predictions.assert_called_once_with(
        "some random unknown question?"
    )
    mocked_get_random_dunno_answer.assert_called_once_with()
