from django.urls import path
from .views import UsuarioListCreateView, FinancasByUserView, index

urlpatterns = [
    path('', index, name='index'),
    path('usuarios/', UsuarioListCreateView.as_view(), name='usuarios'),
    path('financas/usuario/', FinancasByUserView.as_view(), name='financas'),
]