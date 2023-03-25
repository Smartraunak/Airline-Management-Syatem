from django.urls import path
from . import views

from .views import flight_searchView,FlightView,flight_seatView,seatView,BookingView,CustomUserCreate
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CustomTokenObtainPairView,CustomLogoutView



urlpatterns = [ 
    path('logout/',CustomLogoutView.as_view(),name='logout'),
    path('register/', CustomUserCreate.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'), 
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    # path('login/', StudentView.as_view()), 
    path('search/', flight_searchView.as_view()),  
    path('flight/', FlightView.as_view()),  
    path('f_seat/', flight_seatView.as_view()),  
    path('seat/', seatView.as_view()),  
    path('book/', BookingView.as_view()),   
]  