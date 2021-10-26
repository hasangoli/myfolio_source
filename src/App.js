import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  // const [color, setColor] = useState("#0dcaf0");
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="app p-lg-4 p-0 pt-5">
      <div className="container row m-auto">
        <div className="col-lg-3 pb-5 pb-lg-0 col-12">
          <Sidebar color={color} />
        </div>

        <div className="col-lg-9 col-12">
          <Main color={color} />
        </div>
      </div>
    </div>
  );
};

export default App;
