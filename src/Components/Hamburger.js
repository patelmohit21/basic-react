import React, { useState } from "react";
import './Styles/Hamburger.css'

export default function Hamburger() {

    const [isOpen, setIsOpen] = useState('false');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
      ☰
      </button>

      <ul className={`menu ${isOpen? 'open' : ''}`}>
        <li>Home</li>
        <li>Contact</li>
        <li>Service</li>
        <li>About</li>
      </ul>
    </div>
  );
}
