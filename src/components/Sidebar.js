import Profile from "../images/photo_2021-06-05_01-02-50.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar rounded shadow-lg py-lg-4 py-3 px-lg-3 px-3">
      <div className="profile">
        <p className="profile-name text-uppercase h3">Hasan Goli</p>
        <p className="profile-job text-uppercase text-secondary">
          Front-End Developer
        </p>
        <img className="profile-image img-fluid" src={Profile} alt="Profile" />
        <ul className="profile-information p-3 m-2">
          <li className="fw-bold mb-3">
            Name:
            <br />
            <span className="text-secondary fw-normal">Hasan Goli</span>
          </li>
          <li className="fw-bold my-3">
            Birthday:
            <br />
            <span className="text-secondary fw-normal">20th Dec 1994</span>
          </li>
          <li className="fw-bold my-3">
            Job:
            <br />
            <span className="text-secondary fw-normal">
              Front-End Developer
            </span>
          </li>
          <li className="fw-bold my-3">
            Email:
            <br />
            <span className="text-secondary fw-normal">
              mrhasangoli@gmail.com
            </span>
          </li>
          <li className="fw-bold my-3">
            Phone Number:
            <br />
            <span className="text-secondary fw-normal">
              +98 (910) 772 47 33
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="../pdf/Hasan_Goli.pdf"
          download
          className="btn rounded-pill btn-info text-light py-2 px-3 disabled"
        >
          <span className="p-3">Download Cv</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
