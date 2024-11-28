from django.urls import path
from .views import UsuarioListCreateView, FinancasAPIView, index

urlpatterns = [
    path('', index, name='index'),
    path('usuarios/', UsuarioListCreateView.as_view(), name='usuarios'),
    path('financas/usuario/', FinancasAPIView.as_view(), name='financas'),
]