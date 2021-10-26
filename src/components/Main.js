import Home from "./main/Home";
import Resume from "./main/Resume";
import Portfolio from "./main/Portfolio";
import Blog from "./main/Blog";
import Contact from "./main/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Main = ({ color }) => {
  const [route, setRoute] = useState("");

  return (
    <div className="main">
      <Navbar setRoute={setRoute} color={color} />
      {(() => {
        switch (route) {
          case "home":
            return <Home color={color} />;
          case "resume":
            return <Resume color={color} />;
          case "portfolio":
            return <Portfolio />;
          case "blog":
            return <Blog />;
          case "contact":
            return <Contact color={color} />;
          default:
            return <Home />;
        }
      })()}
      <Footer color={color} />
    </div>
  );
};

export default Main;
