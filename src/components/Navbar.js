import React from 'react';
import { Link } from 'react-router-dom';
import { useKeranjang } from '../context/KeranjangContext';
import cartImage from '../assets/keranjang.png'; // Impor gambar keranjang
import '../styles/Navbar.css'; // Mengimpor file CSS

function Navbar() {
  const { keranjang } = useKeranjang();

  // Hitung total item di keranjang
  const totalItem = keranjang.reduce((total, item) => total + item.jumlah, 0);

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Korean Spicy</Link>
        
        {/* Menu Navigasi */}
        <ul className="navbar-nav">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">MENU</Link>
          </li>
        </ul>

        {/* Button Klik pada Logo Keranjang */}
        <Link to="/keranjang" className="cart-icon">
          <img src={cartImage} alt="Keranjang" style={{ width: '24px', height: '24px' }} />
          {totalItem > 0 && <span className="badge">{totalItem}</span>} {/* Tampilkan jumlah item */}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;