# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2021-03-23 21:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0034_merge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='jhed',
            field=models.CharField(default=b'', max_length=255, null=True),
        ),
    ]