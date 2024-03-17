# Generated by Django 4.0.4 on 2024-03-13 19:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_title', models.CharField(max_length=200, verbose_name='назва новини')),
                ('article_text', models.TextField(verbose_name='текст новини')),
                ('pub_date', models.DateTimeField(verbose_name='дата публікації')),
            ],
            options={
                'verbose_name': 'Новина',
                'verbose_name_plural': 'Новини',
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=50, verbose_name="ім'я автора")),
                ('comment_text', models.CharField(max_length=200, verbose_name='текст коментаря')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.article')),
            ],
            options={
                'verbose_name': 'Коментар',
                'verbose_name_plural': 'Коментарі',
            },
        ),
    ]
