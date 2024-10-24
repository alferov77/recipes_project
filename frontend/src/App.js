import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<CategoriesPage />} />
                        <Route path="/category/:id" element={<CategoryPage />} />
                        <Route path="/recipe/:id" element={<RecipePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



