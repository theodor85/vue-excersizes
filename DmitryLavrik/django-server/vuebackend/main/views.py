from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer


@api_view(['GET'])
def products_list(request):
    if request.method == 'GET':
        productos = Product.objects.all()
        serializer = ProductSerializer(productos, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def orders(request):
    
    if request.method == 'GET':
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)