from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    content = models.CharField(max_length=5000)
