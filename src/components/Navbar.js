import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useKeranjang } from '../context/KeranjangContext';


function Navbar() {
  const { keranjang } = useKeranjang();
  const [isOpen, setIsOpen] = useState(false);

  // Hitung total item di keranjang
  const totalItem = keranjang.reduce((total, item) => total + item.jumlah, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Korean Spicy</Link>


        
        <button className="navbar-toggler" onClick={toggleMenu}>
          &#9776; {/* Simbol hamburger */}
        </button>
        <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/keranjang">
                Keranjang 
                {totalItem > 0 && (
                  <span className="badge">
                    {totalItem}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;