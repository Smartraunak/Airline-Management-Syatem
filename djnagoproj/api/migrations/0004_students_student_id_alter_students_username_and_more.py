# Generated by Django 4.1.7 on 2023-03-24 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_flight_flight_search_remove_students_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='student_id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='students',
            name='username',
            field=models.CharField(max_length=200),
        ),
        migrations.DeleteModel(
            name='Booking',
        ),
    ]
