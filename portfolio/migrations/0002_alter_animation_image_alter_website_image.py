# Generated by Django 4.1.2 on 2022-10-31 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animation',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='website',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
    ]
