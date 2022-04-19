from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.models import BaseModel


class User(AbstractUser, BaseModel):

    has_purchased = models.BooleanField(default=False)
    
