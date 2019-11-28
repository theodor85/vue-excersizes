from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    price = models.FloatField(default=0)

    def __str__(self):
        return 'Товар № ' + str(self.id) + ': ' + self.title


class Order(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    total = models.FloatField(default=0)