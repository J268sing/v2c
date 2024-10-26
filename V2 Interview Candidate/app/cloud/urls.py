from django.urls import path
from .views import VmListCreateAPIView, VmDetailAPIView

urlpatterns = [
    path('vms/', VmListCreateAPIView.as_view(), name='vm-list-create'),
    path('vms/<int:pk>/', VmDetailAPIView.as_view(), name='vm-detail'),
]
