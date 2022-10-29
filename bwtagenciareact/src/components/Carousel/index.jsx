import React from "react";
import "../Carousel/index.css";
import paisagem0 from "./img/carousel00.jpg"
import paisagem1 from "./img/carousel01.jpg"
import paisagem2 from "./img/carousel02.jpg"

export default function Carousel(){
        return(

          <div className="container" id="slider-container">
        <div class="carousel slide" id="slider" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button className="active" data-bs-target="#slider" data-bs-slide-to="0" aria-current="true"
                    aria-label="Slide 1" type="button"></button>

                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2">
                </button>

                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3">
                </button>
            </div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a><img src={paisagem0} className="d-block w-100" alt="..." /></a>
    </div>
    <div className="carousel-item">
      <a><img src={paisagem1}  className="d-block w-100" alt="..." /></a>
    </div>
    <div className="carousel-item">
      <a><img src={paisagem2}  className="d-block w-100" alt="..." /></a>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
</div>
</div>
)
}
