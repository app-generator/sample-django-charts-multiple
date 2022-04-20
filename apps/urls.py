from django.urls import path

from . import views

urlpatterns = [
    # The home page
    path("", views.index, name="home"),
]