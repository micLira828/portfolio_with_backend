from django.contrib import admin
from .models import Website
from .models import Animation
from .models import Design

admin.site.register(Website)
admin.site.register(Animation)
admin.site.register(Design)
