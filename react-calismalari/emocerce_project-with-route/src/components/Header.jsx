import Cart from "./Cart";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Erhan Yiğit Er</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">Anasayfa</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/profile">Profil</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/cart">Your Cart</Link>
          </NavItem>
          <Cart
            clearCart={props.clearCart}
            cart={props.cart}
            updateCart={props.updateCart}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
