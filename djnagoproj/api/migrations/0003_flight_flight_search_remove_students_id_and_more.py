# Generated by Django 4.1.7 on 2023-03-24 17:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_remove_students_address_remove_students_first_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='flight',
            fields=[
                ('flight_id', models.IntegerField(primary_key=True, serialize=False)),
                ('origin_name', models.CharField(max_length=200)),
                ('dest_name', models.CharField(max_length=200)),
                ('start', models.TimeField()),
                ('end', models.TimeField()),
                ('Eco_fair', models.IntegerField()),
                ('first_fair', models.IntegerField()),
                ('busi_fair', models.IntegerField()),
                ('date', models.DateField()),
                ('airline', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='flight_search',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('origin', models.CharField(max_length=200)),
                ('dest', models.CharField(max_length=200)),
                ('prf_class', models.CharField(max_length=200)),
            ],
        ),
        migrations.RemoveField(
            model_name='students',
            name='id',
        ),
        migrations.AlterField(
            model_name='students',
            name='username',
            field=models.CharField(max_length=200, primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='seat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Econo', models.IntegerField()),
                ('Bussi', models.IntegerField()),
                ('First', models.IntegerField()),
                ('Econo_price', models.IntegerField()),
                ('Bussi_price', models.IntegerField()),
                ('First_price', models.IntegerField()),
                ('T_Econo', models.IntegerField()),
                ('T_Bussi', models.IntegerField()),
                ('T_First', models.IntegerField()),
                ('Income', models.IntegerField()),
                ('flight', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.flight')),
            ],
        ),
        migrations.CreateModel(
            name='flight_seat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flight', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.flight')),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_age', models.IntegerField()),
                ('Num_trav', models.IntegerField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
