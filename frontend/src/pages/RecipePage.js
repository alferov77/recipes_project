import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/recipes/${id}/`)
            .then(response => response.json())
            .then(data => setRecipe(data));
    }, [id]);

    if (!recipe) return <div>Загрузка...</div>;

    const steps = recipe.instructions.split(/STEP \d+/).filter(step => step.trim() !== '');
    return (
        <div className="page-content">
            <h1>{recipe.title}</h1>
            {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}

            <h3>Шаги приготовления:</h3>
            {steps.map((step, index) => (
                <p key={index}>Шаг {index + 1}: {step.trim()}</p>
            ))}

            <Link to={`/category/${recipe.category.id}`}>
                Back to "{recipe.category.name}"
            </Link>
        </div>
    );
}

export default RecipePage;

