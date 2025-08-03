"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import omanFlag from "./../../Images/flags/OmanFlag.jpg";
import italyFlag from "./../../Images/flags/ItalyFlag.jpg";
import germanyFlag from "./../../Images/flags/GermanyFlag.jpg";
import australiaFlag from "./../../Images/flags/AustraliaFlag.jpg";
import austriaFlag from "./../../Images/flags/AustriaFlag.jpg";
import franceFlag from "./../../Images/flags/FranceFlag.jpg";
import lithuaniaFlag from "./../../Images/flags/LithuaniaFlag.jpg";
import mexicoFlag from "./../../Images/flags/mexicoFlag.jpg";
import netherlandFlag from "./../../Images/flags/NetherlandFlag.jpg";
import ukFlag from "./../../Images/flags/UkFlag.jpg";
import usaFlag from "./../../Images/flags/UsaFlag.jpg";
import Image from 'next/image';
import "./CountriesCarousel.css"
const CountriesCarousel = () => {
      const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
<div className="apostilleCountries">
      <h3>Apostille Countries</h3>
      <div className="apostilleCountriesContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={omanFlag} alt="omanFlag"  />
              </div>
              <h4>OMAN</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={italyFlag} alt="italyFlag"  />
              </div>
              <h4>ITALY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={germanyFlag} alt="germanyFlag"  />
              </div>
              <h4>GERMANY</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={australiaFlag} alt="australiaFlag"  />
              </div>
              <h4>AUSTRALIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={austriaFlag} alt="austriaFlag"  />
              </div>
              <h4>AUSTRIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={lithuaniaFlag} alt="lithuaniaFlag"  />
              </div>
              <h4>LITHUANIA</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={mexicoFlag} alt="mexicoFlag"  />
              </div>
              <h4>MEXICO</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={netherlandFlag} alt="netherlandFlag"  />
              </div>
              <h4>NETHERLAND</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={franceFlag} alt="franceFlag"  />
              </div>
              <h4>FRANCE</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={ukFlag} alt="ukFlag"  />
              </div>
              <h4>UK</h4>
            </div>
          </div>
          <div>
            <div className="apostilleCountriesWrapper">
              <div className="item">
                <Image src={usaFlag} alt="usaFlag"  />
              </div>
              <h4>USA</h4>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CountriesCarousel
