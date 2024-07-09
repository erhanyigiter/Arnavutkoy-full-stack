import { Container, Row, Col } from "reactstrap";
import Card from "./component/Cart";
import Categories from "./component/Categories";
// import Footer from "./component/Footer";
import Header from "./component/Header";
import Products from "./component/Products";
import React, { useState, useEffect } from "react";

const App = () => {

  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

    useEffect(() => {
    getProducts();
  },[]);

  const addToCart = (product) => {
    let newCart = [...cart];
    var addItem = newCart.find((c) => c.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };


  return (
		<Container fluid>
			<Header cart = {cart} removeFromCart = {removeFromCart}/>
			<Row>
				<Col xs="2">
					<Categories 
          changeCategory={changeCategory}
          currentCategory={currentCategory}
          />
				</Col>
				<Col xs="9">
					<Products
          addToCart={addToCart}
          products={products}
          changeCategory={changeCategory}
          currentCategory={currentCategory}
          />
				</Col>
			</Row>
		</Container>
	);
};

export default App;