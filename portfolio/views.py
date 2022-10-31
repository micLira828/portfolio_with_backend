from rest_framework import viewsets
from rest_framework import permissions
#from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .serializers import WebsiteSerializer, AnimationSerializer, DesignSerializer
from .models import Website, Animation, Design


class WebsiteViewSet(viewsets.ModelViewSet):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class AnimationViewSet(viewsets.ModelViewSet):
    queryset = Animation.objects.all()
    serializer_class = AnimationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class DesignViewSet(viewsets.ModelViewSet):
    queryset = Design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]



