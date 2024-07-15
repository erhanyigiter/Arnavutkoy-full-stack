import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch("http://localhost:8000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ListGroup>
         <ListGroupItem
        active={props.currentCategory === ""}
        onClick={() => props.changeCategory(null)}
        style={{ cursor: "pointer" }}
      >
       Hepsini Gör
      </ListGroupItem>
      {categories.map((category) => (
        <ListGroupItem
          active={category.categoryName === props.currentCategory}
          key={category.id}
          onClick={() => props.changeCategory(category)}
          style={{ cursor: "pointer" }}
        >
          {category.categoryName}
        </ListGroupItem>
      ))}
   
    </ListGroup>
  );
};

export default Categories;
