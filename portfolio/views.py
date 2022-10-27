from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WebsiteSerializer
from .serializers import AnimationSerializer
from .serializers import DesignSerializer
from .models import Animation
from .models import Website
from .models import Design

class WebsiteViewSet(viewsets.ModelViewSet):
    serializer_class = WebsiteSerializer
    queryset = Website.objects.all()

class AnimationViewSet(viewsets.ModelViewSet):
    serializer_class = AnimationSerializer
    queryset = Animation.objects.all()

class DesignViewSet(viewsets.ModelViewSet):
    serializer_class = DesignSerializer
    queryset = Design.objects.all()

def index(request):
    return render(request, 'index.html')
    

