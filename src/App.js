import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app p-lg-4 p-0 pt-5">
      <div className="container row m-auto">
        <div className="col-lg-3 pb-5 pb-lg-0 col-12">
          <Sidebar />
        </div>

        <div className="col-lg-9 col-12">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
