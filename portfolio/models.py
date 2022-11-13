from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename):
    return 'posts/{filename}'.format(filename=filename)

class Animation(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(_("Image"), upload_to=upload_to, default='posts/default.jpg')
    url = models.URLField(blank=True)
    
    
    def __str__(self):
        return self.title

class Website(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    url = models.URLField(blank=True)
    
    def __str__(self):
        return self.title

class Design(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(_("Image"), upload_to=upload_to, default='posts/default.jpg')
    url = models.URLField(blank=True)
    
    def __str__(self):
        return self.title
