from rest_framework import serializers
from .models import usuario, financas

class FinancasSerializer(serializers.ModelSerializer):
    class Meta:
        model = financas
        fields = ['renda_mensal', 'despesas', 'lucro', 'objetivo', 'meses']

class UsuarioSerializer(serializers.ModelSerializer):
    financas = FinancasSerializer(read_only=True) 

    class Meta:
        model = usuario
        fields = ['nome', 'email', 'financas']

