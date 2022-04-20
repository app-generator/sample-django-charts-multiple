from django.contrib import admin
from import_export import resources
from import_export.admin import ImportMixin

from apps.product.models import Product

class ProductResource(resources.ModelResource):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'created')
        
@admin.register(Product)
class ProductAdmin(ImportMixin, admin.ModelAdmin):
    resource_class = ProductResource
    list_display = ('id', 'name', 'price', 'description', 'created', 'updated')
    list_filter = ('created',)
    search_fields = ('name',)
