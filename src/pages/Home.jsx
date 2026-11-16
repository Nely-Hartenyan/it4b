import Header from "../components/Header";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

function Home() {

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header/>
      <Hero/>
      <ProductList/>
      <Footer/>
    </div>
  );
}


export default Home;