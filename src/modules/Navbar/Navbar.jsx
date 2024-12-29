import PropTypes from "prop-types";
import logo from "./../../assets/Logo.png";

const Navbar = ({ activeSlide }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 text-white">
      <div className="flex justify-between items-center px-4 sm:px-[60px] pt-6 sm:pt-[60px]">
        {/* Left Section - Logo & Website Name */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-7 h-7 sm:w-[60px] sm:h-[60px]"
          />
          <span className="text-base sm:text-4xl">GMK Dakonderhoud</span>
        </div>

        {/* Center Links - Only visible on Slide 6 */}
        {activeSlide === 6 && (
          <div className="hidden sm:flex space-x-6 sm:space-x-20">
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
        {activeSlide === 6 && (
          <div className="text-xs sm:text-base">
            <span className="text-[#E7E7E7]">
              Spoed? Bel 020 1234567 of klik hier | Chat
            </span>
          </div>
        )}
      </div>

      {/* Mobile Navigation - Links for Slide 6 */}
      {activeSlide === 6 && (
        <div className="flex sm:hidden justify-around mt-4">
          <a href="#home" className="text-sm hover:text-gray-300 transition">
            Diensten
          </a>
          <a href="#about" className="text-sm hover:text-gray-300 transition">
            Over Ons
          </a>
          <a
            href="#services"
            className="text-sm hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activeSlide: PropTypes.number.isRequired,
};

export default Navbar;
