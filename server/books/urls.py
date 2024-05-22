from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, register,login_user

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register', register),
    path('login', login_user),
]
