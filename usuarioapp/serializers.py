from rest_framework import serializers
from .models import usuario  # Importa o modelo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = ['nome','email']
