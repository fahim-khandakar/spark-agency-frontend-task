import "./App.css";
import AboutUs from "./modules/About Us/AboutUs";
import ClientCarousel from "./modules/Client Carousel/ClientCarousel";
import Footer from "./modules/Footer/Footer";
import HeroCarousel from "./modules/Hero Carousel/HeroCarousel";
import ProductCarousel from "./modules/Product Carousel/ProductCarousel";

function App() {
  return (
    <div>
      <HeroCarousel />
      <AboutUs />
      <ClientCarousel />
      <ProductCarousel />
      <Footer />
    </div>
  );
}

export default App;
