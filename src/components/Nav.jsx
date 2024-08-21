import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <nav>
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
