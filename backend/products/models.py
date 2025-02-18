from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    image = models.URLField()
    brand = models.CharField(max_length=100)
    stock = models.PositiveIntegerField()
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2)
    detail = models.TextField()
    is_featured = models.BooleanField(default=False)
    inventory_value = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return self.name
  
    
class Brand(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField(max_length=200, blank=True, null=True)  # For image URL
    brand = models.CharField(max_length=255)
    detail = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    
class Category(models.Model):
    name = models.CharField(max_length=200)
    image = models.URLField()
    category = models.CharField(max_length=100)
    detail = models.TextField()
    
    def __str__(self):
        return self.name