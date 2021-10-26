import Client from "./resume/Client";
import Borjklaymer from "../../images/clients/borjklaymer.jpg";
import JahanKlaymer from "../../images/clients/jahanklaymer-min.png";
import JicoExact from "../../images/clients/logo.png";
import MerceMarket from "../../images/clients/Logo_1900x1900.png";
import ElectroMotor from "../../images/clients/lOGOyellow.png";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import HistoryBlock from "./resume/HistoryBlock";

const Resume = ({ color }) => {
  return (
    <div className="resume">
      <div className="about-me p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg my-5">
        <h3 className="my-4">Resume</h3>

        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <h5>
              <FaSuitcase
                className="resume-icon text-white m-1 p-2 fs-1 rounded-pill"
                style={{ backgroundColor: color }}
              />{" "}
              Working History
            </h5>

            <div className="row">
              <HistoryBlock
                title={"Web Dev Intrn. - NetDes"}
                date={"2020 - 2021"}
                info={
                  "In this period I learned to create and deploy websites using Wordpress and Joomla on Linux based servers."
                }
              />
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <h5>
              <FaGraduationCap
                className="resume-icon text-white m-1 p-2 fs-1 rounded-pill"
                style={{ backgroundColor: color }}
              />{" "}
              Academic History
            </h5>

            <div className="row">
              <HistoryBlock
                title={"Islamic Azad University, Karaj Branch"}
                date={"2014 - 2018"}
                info={
                  "Bachelor of English literature with well grasp in reading and listening"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-me p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg my-5">
        <h3 className="my-4">Clients</h3>

        <div className="row">
          <Client src={JicoExact} />
          <Client src={MerceMarket} />
          <Client src={JahanKlaymer} />
          <Client src={Borjklaymer} />
          <Client src={ElectroMotor} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
