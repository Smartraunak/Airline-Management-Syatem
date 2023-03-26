from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,generics,permissions
from .models import flight_search, flight, flight_seat, seat,Booking,CustomUser
from .serializers import flight_searchSerializer, FlightSerializer, flight_seatSerializer, seatSerializer,BookingSerializer,CustomUserSerializer,CustomTokenObtainPairSerializer
from django.contrib.auth.models import auth, User
from django.contrib import messages
from datetime import datetime
from django.contrib.auth import authenticate,logout
from . import models
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.
config = {
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
}



class CustomUserCreate(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        user = CustomUser.objects.get(email=request.data['email'])
        valid= serializer.is_valid(raise_exception=True)
        response = Response({
            'status': True,
            "data": "helo",
            'message':"User looged in successfully",
            'access':serializer.data['access'],
            'refresh':serializer.data['refresh']
        }, status=200)
        return response

class CustomLogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "You have been logged out."}, status=status.HTTP_200_OK)



# class CustomUserCreate(generics.CreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = CustomUserSerializer
#     permission_classes = [permissions.AllowAny]

# class CustomUserLogin(TokenObtainPairView):
#     serializer_class = TokenObtainPairSerializer

# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         # Add custom claims
#         token['name'] = user.name

#         return token

#     def validate(self, attrs):
#         credentials = {
#             'email': attrs.get('email'),
#             'password': attrs.get('password')
#         }

#         if all(credentials.values()):
#             user = authenticate(**credentials)

#             if user:
#                 if not user.is_active:
#                     raise serializers.ValidationError(
#                         'User account is disabled.'
#                     )

#                 refresh = self.get_token(user)

#                 return {
#                     'refresh': str(refresh),
#                     'access': str(refresh.access_token),
#                 }
#             else:
#                 raise serializers.ValidationError(
#                     'Unable to log in with provided credentials.'
#                 )
#         else:
#             raise serializers.ValidationError(
#                 'Must include "email" and "password".'
#             )

# class CustomTokenObtainPairView(TokenObtainPairView):
#     serializer_class = CustomTokenObtainPairSerializer

# class StudentView(APIView):

#     def get(self, request, *args, **kwargs):
#         result = Students.objects.all()
#         serializers = StudentSerializer(result, many=True)
#         print("Get", result, serializers)

#         response = Response({
#             'status': 'success',
#             "data": "helo",
#             "students": serializers.data
#         }, status=200)
#         response["Access-Control-Allow-Origin"] = "*"
#         response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
#         response["Access-Control-Max-Age"] = "1000"
#         response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
#         return response

#     def post(self, request):
#         print(request.data)
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
#         else:
#             return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class FlightView(APIView):
    def get_available_flights(self, request):
        origin_name = request.GET.get('origin_name')
        dest_name = request.GET.get('dest_name')
        date = request.GET.get('date')

        # filter flights based on origin, destination, and date
        flights = flight.objects.filter(origin_name=origin_name, dest_name=dest_name, date=date)

        # serialize the filtered flights
        serializer = FlightSerializer(flights, many=True)

        # create the response object and set the Access-Control headers
        response = Response({
            'status': 'success',
            'flights': serializer.data
        })
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

        return response


    def get(self, request, *args, **kwargs):
        result = flight.objects.all()
        serializers = FlightSerializer(result, many=True)
        print("Get", result, serializers)

        response = Response({
            'status': 'success',
            "data": "helo",
            "flights": serializers.data
        }, status=200)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response

    def post(self, request):
        serializer = FlightSerializer(data=request.data, many=True)
        print(request.data)
        if serializer.is_valid():
            print(request.data)
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class flight_searchView(APIView):
    def get(self, request, *args, **kwargs):
        result = flight_search.objects.all()
        serializers = flight_searchSerializer(result, many=True)
        print("Get", result, serializers)

        response = Response({
            'status': 'success',
            "data": "helo",
            "students": serializers.data
        }, status=200)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response

    def post(self, request):
        serializer = flight_searchSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            print(request.data)
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class flight_seatView(APIView):
    def get(self, request, *args, **kwargs):
        result = flight_seat.objects.all()
        serializers = flight_seatSerializer(result, many=True)
        print("Get", result, serializers)

        response = Response({
            'status': 'success',
            "data": "helo",
            "students": serializers.data
        }, status=200)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response

    def post(self, request):
        print(request.data)
        serializer = flight_seatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class seatView(APIView):
    def get(self, request, *args, **kwargs):
        result = seat.objects.all()
        serializers = seatSerializer(result, many=True)
        print("Get", result, serializers)

        response = Response({
            'status': 'success',
            "data": "helo",
            "students": serializers.data
        }, status=200)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response

    def post(self, request):
        print(request.data)
        serializer = seatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class BookingView(APIView):
    def get(self, request, *args, **kwargs):
        result = Booking.objects.all()
        serializers = BookingSerializer(result, many=True)
        print("Get", result, serializers)

        response = Response({
            'status': 'success',
            "data": "helo",
            "students": serializers.data
        }, status=200)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response

    def post(self, request):
        print(request.data)
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# ------------------------------------------------------------------------------------------------------------------------------
