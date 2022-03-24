import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./OtherMiscCards/Hero";
import DescCards from "./OtherMiscCards/DescCards";
import FeaturedBrans from "./OtherMiscCards/FeaturedBrans";

function index() {
  return (
    <div>
      <Header />
      <Hero />
      <DescCards />
      <FeaturedBrans />
      <Footer />
    </div>
  );
}

export default index;
