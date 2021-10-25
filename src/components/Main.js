import Home from "./main/Home";
import Resume from "./main/Resume";
import Portfolio from "./main/Portfolio";
import Blog from "./main/Blog";
import Contact from "./main/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Main = () => {
  const [route, setRoute] = useState("");

  return (
    <div className="main">
      <Navbar setRoute={setRoute} />
      {(() => {
        switch (route) {
          case "home":
            return <Home />;
          case "resume":
            return <Resume />;
          case "portfolio":
            return <Portfolio />;
          case "blog":
            return <Blog />;
          case "contact":
            return <Contact />;
          default:
            return <Home />;
        }
      })()}
      <Footer />
    </div>
  );
};

export default Main;
