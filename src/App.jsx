import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";
import Flavour from "./sections/Flavour";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";
import Benefit from "./sections/Benefit";
import Testimonial from "./sections/Testimonial";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);
  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Hero />
          <Message />
          <Flavour />
          <Nutrition />
          <div>
            <Benefit />
            <Testimonial />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
