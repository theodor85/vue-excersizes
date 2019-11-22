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


class OrderedProducts(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE,
        related_name='products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)