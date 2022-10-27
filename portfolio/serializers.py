from rest_framework import serializers
from .models import Animation
from .models import Website
from .models import Design

class AnimationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animation
        fields = '__all__'

class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Website
        fields = '__all__'

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = '__all__'