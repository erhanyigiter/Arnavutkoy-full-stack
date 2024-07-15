import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const NavbarComponent = ({ sepet, sepetguncelle, sepetsifirla }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Erhan</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#" target="_blank">
              Erhan
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sepet - {sepet.length}
            </DropdownToggle>
            <DropdownMenu end>
              {sepet.map((urun) => (
                <DropdownItem key={urun.urun.id}>
                  <span
                    onClick={() => sepetguncelle(urun.urun, "arttir")}
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                  >
                    <Button color='primary'>Ekle</Button>
                  </span>
                  <span
                    onClick={() => sepetguncelle(urun.urun, "azalt")}
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                  >
                    <Button color='danger'>Çıkart</Button>
                  </span>
                  {urun.urun.productName} Adet: {urun.adet}
                </DropdownItem>
              ))}
              <DropdownItem divider />
              {sepet.length > 0 && (
                <DropdownItem onClick={sepetsifirla}>Sepeti Sıfırla</DropdownItem>
              )}
              <DropdownItem tag={Link} to="/odeme">Ödeme Sayfasına Git</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
