from django.contrib import admin

from .models.about_me import AboutMe
from .models.project import Project
from .models.skill import Skill

admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(AboutMe)
