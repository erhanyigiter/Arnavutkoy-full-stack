import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const SepetComponent = ({ sepet, sepetguncelle, sepetsifirla }) => {
  return (
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
  );
};

export default SepetComponent;
