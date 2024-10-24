from rest_framework import serializers
from .models import Category, Recipe

class SimpleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class RecipeSerializer(serializers.ModelSerializer):
    category = SimpleCategorySerializer(read_only=True)
    image = serializers.ImageField(required=False)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'instructions', 'category', 'image']

class CategorySerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'recipes']

