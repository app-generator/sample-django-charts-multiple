from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from apps.product.models import Product
from apps.product.serializers import ProductSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(detail=False, methods=['get'], url_path='sales')
    def sales_over_time(self, request, *args, **kwargs):
        products = Product.objects.all()
        days = []
        for product in products:
            days.append(product.created.date())
        days = list(set(days))
        days.sort()
        data = []
        for day in days:
            data.append({
                'day': day,
                'count': Product.objects.filter(created__date=day).count()
            })
        return Response(data, status=status.HTTP_200_OK)