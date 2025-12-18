import ApostilleCountriesList from "../components/ApostilleCountriesList/ApostilleCountriesList";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import AboutUs from "../components/HomePage/AboutUs/AboutUs";
import Component1 from "../components/HomePage/Component1/Component1";
import Component2 from "../components/HomePage/Component2/Component2";
import Component3 from "../components/HomePage/Component3/Component3";
import Component4 from "../components/HomePage/Component4/Component4";
import HomeContent from "../components/HomePage/HomeContent";
import HomeContentHead from "../components/HomePage/HomeContentHead";
import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeKeywords from "../components/HomePage/HomeKeywords/HomeKeywords";
import HomeService from "../components/HomePage/HomeService/HomeService";
import Map from "../components/Map/Map";
import Reviews from "../components/Reviews/Reviews";
import CountriesCarousel from "./../components/CountriesCarousel/CountriesCarousel";
import HomeFaq from "./../components/HomePage/HomeFaq/HomeFaq";

export const metadata = {
  title:
    "MEA Apostille Service in Bangalore at Best Price – 1Hr Documents Collection",
  description:
    "MEA Apostille Service in Bangalore at Best Price. If you are planning to work, study, start a business, or move your family to the Hague Countries. Call Now! ",
  alternates: {
    canonical: "https://meaapostilleservice.com/",
  },

  keywords: [
    "MEA attestation",
    "MEA attestation Bangalore",
    "Ministry of External Affairs attestation",
    "MEA document attestation",
    "MEA certificate attestation",
    "MEA attestation services Bangalore",
  ],
};
export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HomeContentHead />
      {/* <MainServices/> */}
      <Component4 />
      <Component1 />
      <Component2 />
      <AboutUs />
      <Component3 />
      <ApostilleCountriesList />
      <HomeService />
      <HomeKeywords />
      <Reviews />
      <CountriesCarousel />
      <HomeFaq />
      <Map />
      <HomeContent />
    </div>
  );
}
