import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryPage() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch(`/api/categories/${id}/`)
            .then(response => response.json())
            .then(data => setCategory(data));
    }, [id]);

    if (!category) return <div>Загрузка...</div>;

    return (
        <div>
            <h1>{category.name}</h1>
            <ul>
                {category.recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Categories</Link>
        </div>
    );
}

export default CategoryPage;
