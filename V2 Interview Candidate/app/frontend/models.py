from django.db import models

# Create your models here.
class VM(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    cpu = models.CharField(max_length=50)
    memory = models.CharField(max_length=50)
    disk = models.CharField(max_length=50)

    def __str__(self):
        return self.name