import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Col, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';

const OdemeSayfasi = ({ sepet, sepetguncelle }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const CustomCheckoutButton = ({ onClick }) => (
    <div className="paycontainer" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="left-side">
        <div className="cpayard">
          <div className="card-line"></div>
          <div className="buttons"></div>
        </div>
        <div className="post">
          <div className="post-line"></div>
          <div className="screen">
            <div className="dollar">$</div>
          </div>
          <div className="numbers"></div>
          <div className="numbers-line2"></div>
        </div>
      </div>
      <div className="right-side">
        <div className="new">Kart ile Öde</div>
      </div>
    </div>
  );

  return (
    <Container>
      <h2>Ödeme Sayfası</h2>
      <Row>
        <Col xs="8">
          <ListGroup>
            {sepet.map((urun) => (
              <ListGroupItem key={urun.urun.id}>
                <span
                  onClick={() => sepetguncelle(urun.urun, "arttir")}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                >
                  <Button color='primary' style={{margin:"10px"}}>Ekle</Button>
                </span>
                {urun.urun.productName} - Adet: {urun.adet}
                <span
                  onClick={() => sepetguncelle(urun.urun, "azalt")}
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                >
                  <Button color="danger" style={{margin:"10px" }}>Çıkart</Button>
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col xs="4">
          <h3>Ödeme Bilgileri</h3>
          <CustomCheckoutButton onClick={toggleModal} />
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <div className="payment--options">
            <h5 style={{textAlign:"center"}}>Arnavutköy Güvenli Ödeme Sistemleri</h5>
          </div>
          <div className="separator">
            <hr className="line" />
            <hr className="line" />
          </div>
          <div className="credit-card-info--form">
            <div className="input_container">
              <label className="input_label" htmlFor="name_field">İsim Soy İsim</label>
              <input id="name_field" className="input_field" type="text" name="input-name" placeholder="Tam Adınızı Giriniz" />
            </div>
            <div className="input_container">
              <label className="input_label" htmlFor="card_field">Kart Numaranız</label>
              <input id="card_field" className="input_field" type="number" name="input-card" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="input_container">
              <label className="input_label" htmlFor="expiry_field">SKT  / CVV</label>
              <div className="split">
                <input id="expiry_field" className="input_field" type="text" name="input-expiry" placeholder="01/23" />
                <input id="cvv_field" className="input_field" type="number" name="cvv" placeholder="CVV" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Checkout</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default OdemeSayfasi;
