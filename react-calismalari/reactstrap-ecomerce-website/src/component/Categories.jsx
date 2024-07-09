import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <ListGroup>
      {categories.map((category) => (
        <ListGroupItem
          key={category.id}
          active={category.categoryName === props.currentCategory}
          onClick={() => props.changeCategory(category)}
        >
          {category.categoryName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Categories;
