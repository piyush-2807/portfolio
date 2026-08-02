import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

function closeMenu() {
setMenuOpen(false);
}

return ( <header className="navbar"> <a href="#home" className="logo" onClick={closeMenu}>
Piyush<span> Chowdhary</span> </a>
  <nav className={menuOpen ? "nav-links active" : "nav-links"}>
    <a href="#home" onClick={closeMenu}>
      Home
    </a>

    <a href="#about" onClick={closeMenu}>
      About
    </a>

    <a href="#skills" onClick={closeMenu}>
      Skills
    </a>

    <a href="#achievements" onClick={closeMenu}>
      Achievements
    </a>

    <a href="#projects" onClick={closeMenu}>
      Projects
    </a>

    <a href="#contact" onClick={closeMenu}>
      Contact
    </a>
  </nav>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Open navigation menu"
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
</header>
);
}

export default Navbar;
