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
            return <Portfolio color={color} />;
          case "blog":
            return <Blog color={color} />;
          case "contact":
            return <Contact color={color} />;
          default:
            return <Home color={color} />;
        }
      })()}
      <Footer color={color} />
    </div>
  );
};

export default Main;
