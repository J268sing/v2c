from django.shortcuts import render
from django.views.generic import TemplateView

from django.http import JsonResponse
from .models import VM  # Assuming VM model is defined in models.py

from django.http import HttpResponse

def index(request):
    return render(request, 'home/index.html')  # Make sure the path to index.html is correct
    #return render(request, '')

# Create your views here.
class IndexView(TemplateView):
 	template_name = "home/index.html"


# views.py

def vm_list(request):
    vms = VM.objects.all().values()  # Get all VMs as dictionaries
    return JsonResponse(list(vms), safe=False)
