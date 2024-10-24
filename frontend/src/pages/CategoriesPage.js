import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories/')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="page-content">
            <h2>CATEGORIES</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesPage;


