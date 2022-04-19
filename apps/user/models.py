from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    The User model has already:
    - has_purchased
    """

    has_purchased = models.BooleanField(default=False)
