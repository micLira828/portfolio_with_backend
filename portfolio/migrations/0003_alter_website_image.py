# Generated by Django 3.2.4 on 2022-11-13 04:09

from django.db import migrations, models
import portfolio.models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_animation_image_alter_website_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='website',
            name='image',
            field=models.ImageField(default='posts/default.jpg', upload_to=portfolio.models.upload_to, verbose_name='Image'),
        ),
    ]
