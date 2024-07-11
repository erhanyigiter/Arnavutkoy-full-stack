import { useState, useEffect } from 'react';

function App() {
  const [kategoriler, setKategoriler] = useState([]);
  const [urunler, setUrunler] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [secilikategori, setSeciliKategori] = useState("");

  const kategoridegister = (kategori) => {
    setSeciliKategori(kategori.categoryName);
    urunlercek(kategori.id);
  };

  const kategoricek = () => {
    let url = "http://localhost:3000/categories";
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
    let url = "http://localhost:3000/products";
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

  useEffect(() => {
    kategoricek();
    urunlercek();
  }, []);

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

  return (
    <>
      <h1>Hello World</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <h2>Kategoriler</h2>
          <ul>
            <li key="all">
              <button onClick={() => { setSeciliKategori("Tüm Kategoriler"); urunlercek(); }}>
                Tüm Kategoriler
              </button>
            </li>
            {kategoriler.map((kategori) => (
              <li key={kategori.id}>
                <button onClick={() => kategoridegister(kategori)}>
                  {kategori.id} - {kategori.categoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: "40%" }}>
          <h2>Ürünler</h2>
          {urunler.map((urun) => (
            <div key={urun.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0" }}>
              <span style={{ flex: 1 }}>{urun.categoryId} - {urun.productName}</span>
              <button style={{ flex: "0 0 auto", marginLeft: "10px" }} onClick={() => sepeteEkle(urun)}>Sepete Ekle</button>
            </div>
          ))}
        </div>
        <div style={{ width: "25%" }}>
          <h2>Sepet</h2>
          {sepet.map((item) => (
            <div key={item.urun.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0" }}>
              <span>{item.urun.productName} - {item.adet}</span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button 
                  style={{ color: "green", marginLeft: "10px" }} 
                  onClick={() => sepetguncelle(item.urun, "arttir")}
                >
                  +
                </button>
                <button 
                  style={{ color: "red", marginLeft: "10px" }} 
                  onClick={() => sepetguncelle(item.urun, "azalt")}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
