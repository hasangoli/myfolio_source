import { useState } from "react";
import {
  FaHome,
  FaGithub,
  FaTelegram,
  FaTelegramPlane,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";

const Navbar = ({ setRoute }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded shadow-lg mb-4 p-0 d-none d-lg-block">
        <div class="container ps-0">
          <div class="collapse navbar-collapse" id="navbarNavDesktop">
            <ul class="navbar-nav">
              <div className="btn-group">
                <li class="nav-item btn btn-info">
                  <span class="nav-link" onClick={() => setRoute("home")}>
                    <FaHome className="icon" />
                  </span>
                </li>
                <li class="nav-item btn">
                  <span
                    class="nav-link text-uppercase fw-bold"
                    onClick={() => setRoute("resume")}
                  >
                    Resume
                  </span>
                </li>
                <li class="nav-item btn">
                  <span
                    class="nav-link text-uppercase fw-bold"
                    onClick={() => setRoute("portfolio")}
                  >
                    Portfolio
                  </span>
                </li>
                <li class="nav-item btn">
                  <span
                    class="nav-link text-uppercase fw-bold"
                    onClick={() => setRoute("blog")}
                  >
                    Blog
                  </span>
                </li>
                <li class="nav-item btn">
                  <span
                    class="nav-link text-uppercase fw-bold"
                    onClick={() => setRoute("contact")}
                  >
                    Contact
                  </span>
                </li>
              </div>
            </ul>
          </div>

          <div className="right d-flex">
            <ul className="navbar-nav pe-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://whatsapp.com"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hasangoli"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://telegram.com"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
            <a
              href="tel:+989107724733"
              className="btn rounded-pill btn-info text-light ps-3"
            >
              <span className="pe-3">Hire Me</span>
              <FaTelegramPlane className="icon" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar navbar-light bg-light rounded d-block d-lg-none shadow-lg p-0">
        <div className="container-fluid p-0 m-0">
          <li className="nav-item btn btn-info m-0">
            <span className="nav-link" onClick={() => setRoute("home")}>
              <FaHome className="icon" />
            </span>
          </li>
          <div className="right row">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/989107724733"
                >
                  <FaWhatsapp className="p-1 fs-1 text-dark" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hasangoli"
                >
                  <FaGithub className="p-1 fs-1 text-dark" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/unconsciousman"
                >
                  <FaTelegram className="p-1 fs-1 text-dark" />
                </a>
              </li>
              <span className="btn" onClick={() => setIsOpen(!isOpen)}>
                <FaBars className="text-dark fs-1 ms-3" />
              </span>
            </ul>
          </div>
        </div>

        <ul
          className={
            isOpen
              ? "navbar-nav p-lg-5 p-3 pt-lg-4 pt-3 bg-white rounded shadow-lg my-2 mobile-navbar mobile-nav-close"
              : "navbar-nav p-lg-5 p-3 pt-lg-4 pt-3 bg-white rounded shadow-lg my-2 mobile-navbar"
          }
        >
          <li className="nav-item btn" onClick={() => setIsOpen(!isOpen)}>
            <span
              className="nav-link text-uppercase fw-bold"
              onClick={() => setRoute("resume")}
            >
              Resume
            </span>
          </li>
          <li className="nav-item btn" onClick={() => setIsOpen(!isOpen)}>
            <span
              className="nav-link text-uppercase fw-bold"
              onClick={() => setRoute("portfolio")}
            >
              Portfolio
            </span>
          </li>
          <li className="nav-item btn" onClick={() => setIsOpen(!isOpen)}>
            <span
              className="nav-link text-uppercase fw-bold"
              onClick={() => setRoute("blog")}
            >
              Blog
            </span>
          </li>
          <li className="nav-item btn" onClick={() => setIsOpen(!isOpen)}>
            <span
              className="nav-link text-uppercase fw-bold"
              onClick={() => setRoute("contact")}
            >
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
