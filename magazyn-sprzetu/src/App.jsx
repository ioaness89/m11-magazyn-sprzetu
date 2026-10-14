import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import InventoryPage from './Components/InventoryPage/InventoryPage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import NewItemPage from './Components/NewItemPage/NewItemPage';
import { useState, useEffect } from 'react';




function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Klawiatura USB",
      category: "Peryferia",
      quantity: 8,
      minimumQuantity: 3,
      location: "Magazyn A"
    },
    {
      id: 2,
      name: "Mysz bezprzewodowa",
      category: "Peryferia",
      quantity: 15,
      minimumQuantity: 5,
      location: "Magazyn A"
    },
    {
      id: 3,
      name: "Monitor 24' cali",
      category: "Ekrany",
      quantity: 4,
      minimumQuantity: 2,
      location: "Magazyn B"
    },
    {
      id: 4,
      name: "Kabel HDMI 2m",
      category: "Okablowanie",
      quantity: 25,
      minimumQuantity: 10,
      location: "Magazyn A"
    },
    {
      id: 5,
      name: "Laptop 15' i5/16GB",
      category: "Komputery",
      quantity: 2,
      minimumQuantity: 3,
      location: "Magazyn B"
    },
    {
      id: 6,
      name: "Dysk SSD 1TB",
      category: "Podzespoły",
      quantity: 12,
      minimumQuantity: 4,
      location: "Magazyn C"
    },
    {
      id: 7,
      name: "Pamięć RAM DDR4 8GB",
      category: "Podzespoły",
      quantity: 1,
      minimumQuantity: 5,
      location: "Magazyn C"
    },
    {
      id: 8,
      name: "Słuchawki z mikrofonem",
      category: "Audio",
      quantity: 10,
      minimumQuantity: 3,
      location: "Magazyn A"
    },
    {
      id: 9,
      name: "Zasilacz do laptopa 65W",
      category: "Zasilanie",
      quantity: 7,
      minimumQuantity: 2,
      location: "Magazyn B"
    },
    {
      id: 10,
      name: "Switch 8-portowy",
      category: "Sieci",
      quantity: 3,
      minimumQuantity: 2,
      location: "Magazyn C"
    },
    {
      id: 11,
      name: "Fotel biurowy",
      category: "Meble",
      quantity: 5,
      minimumQuantity: 1,
      location: "Magazyn B"
    },
    {
      id: 12,
      name: "Kamera internetowa HD",
      category: "Peryferia",
      quantity: 0,
      minimumQuantity: 2,
      location: "Magazyn A"
    }
  ]);

  useEffect(() => {
    setItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        status:
          item.quantity === 0
            ? "Brak produktu"
            : item.quantity < item.minimumQuantity
              ? "Stan minimalny"
              : "Stan prawidłowy"
      }))
    );
  }, []);


  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<DashboardPage items={items}/>}/>
        <Route path="/inventory" element={<InventoryPage items={items} setItems={setItems}/>}/>
        <Route path="/inventory/new" element={<NewItemPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
