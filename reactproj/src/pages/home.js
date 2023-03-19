import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css'
import main from './assets/img/main.jpg'
import galaxy from './assets/img/galaxy.jpg'
import milky from './assets/img/milky.jpg'

function Home() {
  return (
    <div id="carouselExampleIndicators" className="carouselslide" data-ride="carousel" data-pause="false">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block" src={main} alt="First slide"/>
          <div className="carousel-caption d-md-block text-top">
            <h1>Welcome to Indian Airlines!</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block img-fluid" src={galaxy} alt="Second slide" />
          <div className="carousel-caption d-md-block">
            <h1>Where do you want to explore?</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block img-fluid" src={milky} alt="Third slide" />
          <div className="carousel-caption d-md-block">
            <h1>Awarded the best European Airlines for 2011-16!</h1>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Home;
