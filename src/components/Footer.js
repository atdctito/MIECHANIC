import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p>&copy;MIECHANIC ROLL</p>
        <div>
          <a href="https://www.instagram.com/miechanic.roll?igsh=cXUxOXIzZjB5dDk1" className="text-white mx-2">Instagram</a>
          <a href="https://api.whatsapp.com/send/?phone=6281511184500&text&type=phone_number&app_absent=0" className="text-white mx-2">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;