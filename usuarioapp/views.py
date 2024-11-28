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
                email=serializer.validated_data['email']
            )

            if created:
                financas.objects.create(usuario=usuario_instance)
            return Response({'message': 'Usuário processado com sucesso'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class FinancasByUserView(APIView):
    def post(self, request):
        nome = request.data.get('nome')
        email = request.data.get('email')

        try:
            usuario_instance = usuario.objects.get(nome=nome, email=email)
            financa = financas.objects.get(usuario=usuario_instance)
        except (usuario.DoesNotExist, financas.DoesNotExist):
            return Response({'error': 'Usuário ou finanças não encontrados'}, status=status.HTTP_404_NOT_FOUND)

        serializer = FinancasSerializer(financa)
        return Response(serializer.data, status=status.HTTP_200_OK)
