from django.db import models

class Animation(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField(blank=True)
    
    
    def __str__(self):
        return self.title

class Website(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField(blank=True)
    
    def __str__(self):
        return self.title

class Design(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250)
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField(blank=True)
    
    def __str__(self):
        return self.title
