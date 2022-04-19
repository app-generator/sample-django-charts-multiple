from django.contrib import admin
from import_export import resources
from import_export.admin import ImportMixin

from apps.user.models import User

class UserResource(resources.ModelResource):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'has_purchased')
        
@admin.register(User)
class UserAdmin(ImportMixin, admin.ModelAdmin):
    resource_class = UserResource
    list_display = ('id', 'username', 'email', 'has_purchased')
    list_display_links = ('id', 'username', 'email', 'has_purchased')
    list_filter = ('has_purchased',)
    search_fields = ('username', 'email')