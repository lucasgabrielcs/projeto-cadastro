from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import usuario, financas
from .serializers import UsuarioSerializer, FinancasSerializer

def index(request):
    return render(request, 'index.html')  

class UsuarioListCreateView(APIView):
    
    def get(self, request):
        usuarios = usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            usuario_instance, created = usuario.objects.get_or_create(
                nome=serializer.validated_data['nome'],
                email=serializer.validated_data['email'],

            )

class FinancasAPIView(APIView):
    def get(self, request):
        financas_list = financas.objects.all()
        serializer = FinancasSerializer(financas_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FinancasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CombinedDataAPIView(APIView):
    def get(self, request):
        # Obtenha os dados de `usuario`
        usuarios = usuario.objects.all()
        usuarios_serializer = UsuarioSerializer(usuarios, many=True)

        # Obtenha os dados de `financas`
        financas_list = financas.objects.all()
        financas_serializer = FinancasSerializer(financas_list, many=True)

        # Combine os dados em uma única resposta
        combined_data = {
            "usuarios": usuarios_serializer.data,
            "financas": financas_serializer.data,
        }

        return Response(combined_data)
