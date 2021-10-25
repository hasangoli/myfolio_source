import { FaLaptop, FaPenFancy, FaCalendar } from "react-icons/fa";
import Card from "./home/Card";
import Progress from "./home/Progress";

const Home = () => {
  return (
    <div className="home py-4">
      <div className="about-me p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg mb-5">
        <h3 className="my-4">About Me</h3>

        <p>
          I became acquainted with web programming through YouTube and became
          very interested in this field. I started learning at the age of 25 and
          I was able to learn the basic concepts of this field within a year,
          and my university degree also helped me a lot in this field. Based on
          my research, I became interested in the React platform and decided to
          continue on this path. So far, I have been able to learn different
          courses and projects, and I have largely understood the prerequisites.
          I will be happy to be able to start working in a suitable company in
          this field and with my progress I can pave the way for myself and the
          company.
        </p>
      </div>

      <div className="my-services p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg my-5">
        <h3 className="my-4">My Capability</h3>

        <div className="row">
          <Card
            image={<FaLaptop />}
            title={"Web Development"}
            text={"I have been working on web development"}
          />
          <Card
            image={<FaPenFancy />}
            title={"Web Design"}
            text={"I have a basic grasp of designing User Interface with Figma"}
          />
          <Card
            image={<FaCalendar />}
            title={"Time Management"}
            text={"I have time management ability to handle project"}
          />
        </div>
      </div>

      <div className="skills p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg mt-5">
        <div className="row">
          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Design Skills</h5>
            <Progress skill={"Figma"} percentage={40} />
            <Progress skill={"GIMP"} percentage={30} />
            <Progress skill={"Photoshop"} percentage={25} />
            <Progress skill={"Adobe XD"} percentage={15} />
          </div>

          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Code Skills</h5>
            <Progress skill={"Javascript"} percentage={45} />
            <Progress skill={"CSS3"} percentage={70} />
            <Progress skill={"HTML5"} percentage={75} />
            <Progress skill={"Bootstrap"} percentage={45} />
            <Progress skill={"React & Redux"} percentage={30} />
          </div>

          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Other Skills</h5>
            <Progress skill={"Wordpress"} percentage={45} />
            <Progress skill={"WooCommerce"} percentage={35} />
            <Progress skill={"Joomla"} percentage={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
