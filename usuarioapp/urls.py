from django.urls import path
from .views import UsuarioListCreateView, FinancasAPIView,CombinedDataAPIView, index

urlpatterns = [
    path('', index, name='index'),
    path('usuarios/', UsuarioListCreateView.as_view(), name='usuarios'),
    path('financas/', FinancasAPIView.as_view(), name='financas'),
    path('dados/', CombinedDataAPIView.as_view(), name='dados-combinados'),
]