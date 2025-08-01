from django.shortcuts import render

# Create your views here.
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProtectedView(APIView):
    permission_class = [IsAuthenticated]

    def get(self,request):
        response = {
            'status' : 'Request as Permitted'
        }
        return Response(response)