import "./App.css";
import AboutUs from "./modules/About Us/AboutUs";
import ClientCarousel from "./modules/Client Carousel/ClientCarousel";
import Footer from "./modules/Footer/Footer";
import HeroCarousel from "./modules/Hero Carousel/HeroCarousel";
import Navbar from "./modules/Navbar/Navbar";
import ProductCarousel from "./modules/Product Carousel/ProductCarousel";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <ClientCarousel />
      <ProductCarousel />
      <Footer />
    </>
  );
}

export default App;
