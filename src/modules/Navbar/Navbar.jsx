import PropTypes from "prop-types";
import logo from "./../../assets/Logo.png";
const Navbar = ({ activeSlide }) => {
  console.log("active", activeSlide);
  return (
    <nav className="absolute top-0 left-0 w-full z-10  text-white">
      <div className="flex justify-between items-center px-[60px] pt-[60px]">
        {/* Left Section - Logo & Website Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[60px] h-[60px]" />
          <span className="text-4xl">GMK Dakonderhoud</span>
        </div>

        {activeSlide === 6 && (
          <div className="flex space-x-20">
            <a href="#home" className="hover:text-gray-300 transition">
              Diensten
            </a>
            <a href="#about" className="hover:text-gray-300 transition">
              Over Ons
            </a>
            <a href="#services" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>
        )}

        {/* Right Section - Simple Sentence */}
        <div>
          <span className="text-[#E7E7E7]">
            Spoed? Bel 020 1234567 of klik hier | Chat
          </span>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  activeSlide: PropTypes.number.isRequired,
};

export default Navbar;
