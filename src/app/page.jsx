import ApostilleCountriesList from "../components/ApostilleCountriesList/ApostilleCountriesList";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import AboutUs from "../components/HomePage/AboutUs/AboutUs";
import Component1 from "../components/HomePage/Component1/Component1";
import Component2 from "../components/HomePage/Component2/Component2";
import Component3 from "../components/HomePage/Component3/Component3";
import Component4 from "../components/HomePage/Component4/Component4";
import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeService from "../components/HomePage/HomeService/HomeService";
import Map from "../components/Map/Map";
import Reviews from "../components/Reviews/Reviews";
import CountriesCarousel from "./../components/CountriesCarousel/CountriesCarousel";
export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      {/* <MainServices/> */}
      <Component4 />
      <Component1 />
      <Component2 />
      <AboutUs />
      <Component3 />
      <ApostilleCountriesList />
      <HomeService />
      <Reviews />
      <CountriesCarousel />
      <Map />
    </div>
  );
}
