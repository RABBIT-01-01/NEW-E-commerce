from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductDetailView,BrandViewSet,CategoryViewSet

router = DefaultRouter()
router.register(r'brands', BrandViewSet)
router.register(r'products', ProductDetailView)
router.register(r'categorys', CategoryViewSet)

# router.register(r'products',ProductList.as_view() , basename='product')  # Register ProductViewSet
# router.register(r'brands', BrandViewSet, basename='brand')  # Register BrandViewSet

urlpatterns = [
    # path('products/', ProductList.as_view(), name='product-list'),
    # path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
     path('', include(router.urls)),
]

