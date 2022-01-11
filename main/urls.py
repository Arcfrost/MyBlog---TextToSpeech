from django.urls import path

from main import views

urlpatterns=[
    path('',views.index,name='index'),
    path('article/<int:pk>',views.article,name='get_article'),
    path('author/<int:pk>',views.author,name='get_author'),
    path('article',views.create_article,name='create_article'),
    path('authors',views.authors,name='authors'),
    path('apply',views.apply,name='apply'),
    path('article_listen/<int:pk>',views.article_speech,name='article_speech')
]