import React from "react";
import "./carousel.css";

function Carousel(props) {
  return (
    <div className="carousel-section">
      <div className="container">
        <div className="row">
          <div className="col-span-full">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <div className="witchContainer">
                    <img
                      className="d-block witch"
                      src="witch.jpg"
                      alt="Tokyo"
                    />
                  </div>
                  <div className="carousel-caption">
                    <h4>Scarlet Witch</h4>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="batcontainer">
                    <img
                      className="d-block batman"
                      src="batman.jpg"
                      alt="Shanghai"
                    />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Batman</h4>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="rrrContainer">
                    <img className="d-block rrr" src="rrr.jpg" alt="New York" />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h4>RRR</h4>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="marvelsContainer">
                    <img
                      className="d-block marvels"
                      src="marvels.jpg"
                      alt="New York"
                    />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h4>The Marvels</h4>
                    <p>
                      Some representative placeholder content for the fourth
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
