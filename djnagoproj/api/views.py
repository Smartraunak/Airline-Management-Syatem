from django.shortcuts import render
from django.http import JsonResponse

# Create your views here
from django.shortcuts import render  
from rest_framework.views import APIView  
from rest_framework.response import Response  
from rest_framework import status  
from .models import Students  
from .serializers import StudentSerializer  
# Create your views here.  
config = {
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  }
class StudentView(APIView):  
  
    def get(self, request, *args, **kwargs):  
        result = Students.objects.all()  
        serializers = StudentSerializer(result, many=True)  
        print("Get",result,serializers)

        response=Response({
            'status': 'success',
            "data":"helo",
              "students":serializers.data
              },status=200)  
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
        return response
  
    def post(self, request):  
        print(request.data)
        serializer = StudentSerializer(data=request.data)  
        if serializer.is_valid():  
            serializer.save()  
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)  
        else:  
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)