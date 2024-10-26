from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Vm
from .serializers import VmSerializer

# ListCreateAPIView handles GET (list) and POST (create) operations
class VmListCreateAPIView(generics.ListCreateAPIView):
    queryset = Vm.objects.all()
    serializer_class = VmSerializer

# RetrieveUpdateDestroyAPIView handles GET (retrieve), PUT/PATCH (update), and DELETE (destroy) operations
class VmDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vm.objects.all()
    serializer_class = VmSerializer
