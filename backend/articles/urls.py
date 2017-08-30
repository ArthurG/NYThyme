from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.ArticlesList.as_view()) ,
    url(r'^(?P<pk>[0-9]+)/$', views.ArticleDetail.as_view())
]
