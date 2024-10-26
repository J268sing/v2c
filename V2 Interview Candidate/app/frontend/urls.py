from django.urls import path
#from .views import IndexView
from . import views

# urlpatterns = [
# 	path("", IndexView.as_view(), name="index"),
# ]



urlpatterns = [
    path('', views.index, name='index'),
    path('api/vms/', views.vm_list, name='vm-list'),
]