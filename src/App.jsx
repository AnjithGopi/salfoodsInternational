// App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Body from "./pages/Body";
import { useEffect, useRef, useState } from "react";
import Products from "./pages/Products";
import AboutUs from "./pages/About";
import Location from "./pages/Location";
import WhatsAppButton from "./pages/WhatsappButton";


function App() {
  const bodyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (bodyRef.current) {
        const bottomOfBody =
          bodyRef.current.offsetTop + bodyRef.current.offsetHeight;
        const scrollY = window.scrollY + 80; // add header height offset
        setIsSticky(scrollY < bottomOfBody);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isSticky={isSticky} />
      <Body ref={bodyRef} />
      <Products />
      <AboutUs />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;
