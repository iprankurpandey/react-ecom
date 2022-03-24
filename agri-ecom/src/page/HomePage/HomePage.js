import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/OtherMiscCards/Hero";
import DescCards from "../../components/OtherMiscCards/DescCards";
import FeaturedBrans from "../../components/OtherMiscCards/FeaturedBrans";
function HomePage() {
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

export default HomePage;
