import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/Productlist";
import CartList from "./components/Cartlist";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://plus.unsplash.com/premium_photo-1715793630815-ec18e05ade94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rich Chocolate Truffle",
      category: "Cake",
      seller: "Juni",
      price: 1999,
    },
    {
      url: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "S'mores Chocolate",
      category: "Cake",
      seller: "Maryam",
      price: 2450,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1715793630662-6d1f5dbcdc55?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate Almond Joy",
      category: "Cake",
      seller: "Alizey",
      price: 2340,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1715763768781-12241807cb16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Cameron",
      category: "Cake",
      seller: "Stella",
      price: 4000,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1715857944711-20f4b96425d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate Hazelnut Bliss",
      category: "Cake",
      seller: "Sara",
      price: 3000,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1715073943805-2a455de260ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Velvet Chocolate",
      category: "Cake",
      seller: "Javaid",
      price: 3100,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1714662416164-634481c83567?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Orange Moin",
      category: "Cake",
      seller: "Fasih",
      price: 3500,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1714662390534-07fd25d0fbfb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Berry Rom",
      category: "Cake",
      seller: "Liza",
      price: 3100,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716540164276-ed0ab12672c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Strawberry vani",
      category: "Cake",
      seller: "Samuel",
      price: 2100,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716839714459-a516e07d3c93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lumpoa Miost",
      category: "Cake",
      seller: "Fanny",
      price: 4400,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716918178983-565083197467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Prery Lemond",
      category: "Cake",
      seller: "Gabe",
      price: 5000,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716928661182-68ccfe1dc120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Cup red ",
      category: "Cake",
      seller: "Cupid",
      price: 3200,
    },
    {
      url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Cutie Pie",
      category: "CupCake",
      seller: "Lissie",
      price: 900,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716309257738-f9455c103c38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rainbow gumb",
      category: "Pastery",
      seller: "Muneer",
      price: 800,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1716309256554-b55aa49d5fbe?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fambo Pick",
      category: "Pastery",
      seller: "Amber",
      price: 500,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
