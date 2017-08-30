from django.shortcuts import render, HttpResponse
from articles.models import Article
from articles.serializers import ArticleSerializer

from rest_framework import generics

# Create your views here.

class ArticlesList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
