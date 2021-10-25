import Job from "./portfolio/Job";
import JicoExact from "../../images/portfolio/JicoExact.png";
import MerceMarket from "../../images/portfolio/MerceMarket.png";
import NetDes from "../../images/portfolio/NetDes.png";
import JahanKlaymer from "../../images/portfolio/JahanKlaymer.png";
import Borjklaymer from "../../images/portfolio/Borjklaymer.png";
import TodoApp from "../../images/portfolio/TodoApp.png";
import IMDB from "../../images/portfolio/IMDB.png";
import MyFolio from "../../images/portfolio/MyFolio.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="my-services p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg my-5">
        <h3 className="my-4">Portfolio</h3>

        <div className="row">
          <Job
            url={"https://github.com/hasangoli/imdb_source"}
            image={IMDB}
            title={"IMDB Movie Ranking"}
            info={"React, Bootstrap (just source)"}
          />
          <Job
            url={"https://hasangoli.github.io/todo"}
            image={TodoApp}
            title={"Todo"}
            info={"React"}
            link={"https://github.com/hasangoli/todo_source"}
          />
          <Job
            url={"https://hasangoli.github.io/myfolio"}
            image={MyFolio}
            title={"MyFolio"}
            info={"React, Sass, Bootstrap"}
            link={"https://github.com/hasangoli/myfolio_source"}
          />
          <Job
            url={"https://www.jicoexact.ir"}
            image={JicoExact}
            title={"JicoExact"}
            info={"Wordpress, WooCommerce"}
          />
          <Job
            url={"https://www.mercemarket2.ir"}
            image={MerceMarket}
            title={"MerceMarket"}
            info={"Wordpress, WooCommerce"}
          />
          <Job
            url={"https://www.netdes.ir"}
            image={NetDes}
            title={"NetDes"}
            info={"Wordpress, WooCommerce"}
          />
          <Job
            url={"https://www.jahanklaymer.ir"}
            image={JahanKlaymer}
            title={"JahanKlaymer"}
            info={"Wordpress, WooCommerce"}
          />
          <Job
            url={"https://www.borjklaymer.com"}
            image={Borjklaymer}
            title={"Borjklaymer"}
            info={"Joomla"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
