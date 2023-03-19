from django.urls import path
from . import views

from .views import StudentView  

urlpatterns = [  
    path('basic/', StudentView.as_view())  
]  