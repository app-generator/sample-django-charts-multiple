from django.db import models

from apps.models import BaseModel

class Product(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity_sold = models.IntegerField(default=0)

    def __str__(self):
        return self.name