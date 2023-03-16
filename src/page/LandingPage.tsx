import AboutUs from "./AboutUs";
import Ads from "./Ads";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Home from "./Home";
import OurTeam from "./OurTeam";
import Services from "./Services";
import Testimonials from "./Testimonials";

function LandingPage() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Services />
      <Testimonials />
      <OurTeam />
      <Ads />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
