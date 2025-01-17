import React from 'react';
import foto from '../assets/image.png';
import foto1 from '../assets/image1.png';
import foto2 from '../assets/image2.png';
function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img 
              src={foto}
              className="card-img-top" 
              alt="Menu 1" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">keju Spicy Roll</h5>
              <p className="card-text">Roll keju pedas spesial</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img 
              src={foto1}
              className="card-img-top" 
              alt="Menu 2" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">nori Spicy Roll</h5>
              <p className="card-text">Roll nori pedas spesial</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img 
              src={foto2} 
              className="card-img-top" 
              alt="Menu 3" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">crab stick Spicy Roll</h5>
              <p className="card-text">Roll crab stick pedas spesial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;