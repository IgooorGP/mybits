"""
Module with some questions and answers to be used by the bot's intelligence.
The module variable BOT_BRAIN is the data structure that contains all the
questions and answers in the following format:

{
    "question_1": "answer_1",
    "question_2": "answer_2",
    ...
}
"""
ORDINARY_QUESTIONS = {
    "what's your name": "Hey! My name's Igor! Nice to meet you ^^!",
    "how old are you": "What? Bots don't age hehehe, jk! I'm 27 years old!",
    "how are you": "I'm alright! And how about you?",
    "where do you live": "I'm from São Paulo, Brazil!",
    "are you single": "Well... I'm currently engaged!",
    "where do you work": "Currently I'm working at Juntos Somos+ (Votorantim group)!",
    "which languages do you speak": "I speak English, Portuguese and a little bit of German!",
    "what are your hobbies": "Coding, playing, and studying!",
    "why did you switch carreers": "Chemical Engineering became boring! Look, now I can even build bots! hehehe!",
    "where did you study": "I earned my bachelor's degree at Unicamp!",
}

GREETINGS = {
    "hi": "Hello! Stay a while and listen!",
    "hello": "Hoi!",
    "what's up": "Nothing much, and you?",
    "hey there": "Well hello there!",
}

GOODBYES = {
    "bye bye": "Bye! It gets lonely here sometimes on the web...",
    "bye": "Please com again later! It gets lonely here sometimes on the web...",
    "goodbye": "See ya! Please como again later!",
    "see ya": "See ya!",
    "c ya": "c ya l8ter!",
}

TAUNTS = {
    "fuck you": "Well... @#&# you too, -_-!",
    "fag": "Dude, @#*@& off!",
    "gay": "Dude, @#*@& off!",
    "loser": "Hey... mind the language, pretty please?",
    "asshole": "Zzz... kids these days...",
    "dickhead": "Hey......, dude, @#*@& off! Thaaaaaaaaanks!",
    "dipshit": "Ouch! Why so much hate? hehe... @&#*@ you :)!",
    "bitch": "Hey, maybe you got yourself in the wrong site? #&@#head!",
    "queer": "Hey, maybe you got yourself in the wrong site? #&@#head!",
}

COMPLIMENTS = {
    "you are pretty": "Woah! Thanks! My bits look nice today, huh? Thx :)!",
    "I love you": "Hey.... I'm just a bot, you know? Thx, though :)!",
    "you are sexy": "A digital sex bomb, huh? Jk... thanks :)",
    "you look pretty": "Woah! Thanks! My bits look nice today, huh? Thx :)!",
}

DUNNO_ANSWERS = (
    "Sorry, I didn't understand that, come again, please?",
    "Well.. this is embarassing, but I didn't understand that! Try again, please?",
    "Hmm.. I have no idea what's that supposed to mean!",
    "Dang, my bits are a bit rusty... I didn't catch that, try again, please?",
    "I Didn't get it! Maybe Igor didn't program me to be that smart... dang!",
)


BOT_BRAIN = {**ORDINARY_QUESTIONS, **GREETINGS, **TAUNTS, **COMPLIMENTS}
