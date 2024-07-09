import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import React, { useState } from 'react';
import Card from "./Cart";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Ecomerce</NavbarBrand>
			<NavbarToggler onClick={toggle}>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https//github.com" target="blank">
								Github
							</NavLink>
						</NavItem>
						<Card
							cart={props.cart}
							removeToCart={props.removeToCart}
						/>
					</Nav>
				</Collapse>
			</NavbarToggler>
		</Navbar>
	);
};

export default Header;