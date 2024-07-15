import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './components/CategoryList'
import NavbarComponent from './components/NavbarComponent'
import ProductList from './components/ProductList'
import SepetComponent from './components/SepetComponent'
import OdemeSayfasi from './pages/odemesayfasi'



import "./App.css";

function App() {
  const [kategoriler, setKategoriler] = useState([]);
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [secilikategori, setSeciliKategori] = useState("");

  useEffect(() => {
    kategoricek();
    urunlercek();
  }, []);

  const kategoridegister = (kategori) => {
    setSeciliKategori(kategori.categoryName);
    urunlercek(kategori.id);
  };

  const kategoricek = () => {
    let url = "http://localhost:8000/categories";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setKategoriler(data))
      .catch((error) => console.error('Error fetching categories:', error));
  };

  const urunlercek = (kategoriId = "") => {
    let url = "http://localhost:8000/products";
    if (kategoriId) {
      url += `?categoryId=${kategoriId}`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUrunler(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  const sepeteEkle = (urun) => {
    let yenisepet = [...sepet];
    var uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
    if (uruneklenmismi) {
      uruneklenmismi.adet += 1;
    } else {
      yenisepet.push({ urun: urun, adet: 1 });
    }
    setSepet(yenisepet);
  };

  const sepetSil = (urun) => {
    let yenisepet = [...sepet];
    let uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
    if (uruneklenmismi.adet > 1) {
      uruneklenmismi.adet -= 1;
    } else {
      yenisepet = yenisepet.filter((u) => u.urun.id !== urun.id);
    }
    setSepet(yenisepet);
  };

  const sepetguncelle = (urun, islem) => {
    if (islem === "arttir") {
      sepeteEkle(urun);
    } else if (islem === "azalt") {
      sepetSil(urun);
    }
  };

  const sepetsifirla = () => {
    setSepet([]);
  };

  return (
    <Router>
      <Container fluid>
        <NavbarComponent sepet={sepet} sepetguncelle={sepetguncelle} sepetsifirla={sepetsifirla} />
        <Routes>
          <Route path="/" element={
            <Row>
              <Col xs="12" md="3">
                <CategoryList kategoriler={kategoriler} secilikategori={secilikategori} kategoridegister={kategoridegister} />
              </Col>
              <Col xs="12" md="9">
                <h2>{secilikategori}</h2>
                <ProductList urunler={urunler} sepeteEkle={sepeteEkle} />
              </Col>
            </Row>
          } />
          <Route path="/odeme" element={<OdemeSayfasi sepet={sepet} sepetguncelle={sepetguncelle} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
