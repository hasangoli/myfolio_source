import { FaLaptop, FaPenFancy, FaCalendar } from "react-icons/fa";
import Card from "./home/Card";
import Progress from "./home/Progress";

const Home = ({ color }) => {
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
            image={<FaLaptop style={{ color: color }} />}
            title={"Web Development"}
            text={"I have been working on web development"}
          />
          <Card
            image={<FaPenFancy style={{ color: color }} />}
            title={"Web Design"}
            text={"I have a basic grasp of designing User Interface with Figma"}
          />
          <Card
            image={<FaCalendar style={{ color: color }} />}
            title={"Time Management"}
            text={"I have time management ability to handle project"}
          />
        </div>
      </div>

      <div className="skills p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg mt-5">
        <div className="row">
          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Design Skills</h5>
            <Progress color={color} skill={"GIMP"} percentage={30} />
            <Progress color={color} skill={"Figma"} percentage={40} />
            <Progress color={color} skill={"Photoshop"} percentage={25} />
            <Progress color={color} skill={"Adobe XD"} percentage={25} />
          </div>

          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Code Skills</h5>
            <Progress color={color} skill={"NextJS"} percentage={35} />
            <Progress color={color} skill={"React"} percentage={40} />
            <Progress color={color} skill={"React-Native"} percentage={30} />
            <Progress color={color} skill={"Javascript"} percentage={45} />
            <Progress color={color} skill={"CSS3"} percentage={70} />
            <Progress color={color} skill={"HTML5"} percentage={75} />
            <Progress color={color} skill={"TailwindCSS"} percentage={45} />
            <Progress color={color} skill={"AntDesign"} percentage={35} />
            <Progress color={color} skill={"Bootstrap"} percentage={45} />
            <Progress color={color} skill={"Sass"} percentage={40} />
            <Progress color={color} skill={"axios"} percentage={30} />
            <Progress
              color={color}
              skill={"Styled-Components"}
              percentage={15}
            />
          </div>

          <div className="col-12 col-lg-4 py-4 py-lg-0">
            <h5 className="mb-4">Other Skills</h5>
            <Progress color={color} skill={"Wordpress"} percentage={30} />
            <Progress color={color} skill={"WooCommerce"} percentage={25} />
            <Progress color={color} skill={"Joomla"} percentage={20} />
            <Progress color={color} skill={"Linux"} percentage={45} />
            <Progress color={color} skill={"Windows"} percentage={60} />
            <Progress color={color} skill={"cPanel"} percentage={20} />
            <Progress color={color} skill={"Git & Github"} percentage={50} />
            <Progress color={color} skill={"npm"} percentage={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
