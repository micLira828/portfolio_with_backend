from rest_framework import serializers
from .models import Website, Animation, Design

class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Website
        fields = '__all__'

class AnimationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animation
        fields = '__all__'

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = '__all__'