from rest_framework import routers

from apps.user.viewsets import UserViewSet
from apps.product.viewsets import ProductViewSet

router = routers.SimpleRouter()


router.register('user', UserViewSet)
router.register('product', ProductViewSet)

urlpatterns = [
    *router.urls,
]