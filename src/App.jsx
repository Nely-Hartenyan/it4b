import Header from "./components/Header";
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductList from './components/ProductList'
import { useState } from "react";
function App() {

  const [cart,setCart] = useState([]);

  console.log(cart)
  function addToCart(product){
    setCart(prev => [...prev,product])
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header cart={cart.length}/>
      <Hero/>
      <ProductList onAddToCart={addToCart}/>
      <Footer/>
    </div>
  );
}

export default App
