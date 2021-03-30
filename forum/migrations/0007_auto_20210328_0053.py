# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2021-03-28 00:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0006_auto_20210328_0044'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='transcript',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='forum.Transcript'),
        ),
    ]