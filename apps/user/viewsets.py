from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from apps.user.models import User
from apps.user.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    
    @action(detail=False, methods=['get'], url_path='stats/purcahsed')
    def purchase_stats(self, request, *args, **kwargs):
        users = User.objects.filter(has_purchased=True)
        return Response({
            'total_users': User.objects.count(),
            'total_purchased': users.count(),
            'purchased_percentage': round(users.count() / User.objects.count() * 100, 2)
        }, status=status.HTTP_200_OK)
        
    
    @action(detail=False, methods=['get'], url_path='stats/users_created')
    def user_created_per_day(self, request, *args, **kwargs):
        users = User.objects.all()
        days = []
        for user in users:
            days.append(user.date_joined.date())
        days = list(set(days))
        days.sort()
        data = []
        for day in days:
            data.append({
                'day': day,
                'count': User.objects.filter(date_joined__date=day).count()
            })
        return Response(data, status=status.HTTP_200_OK)