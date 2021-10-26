const Footer = ({ color }) => {
  return (
    <footer
      className="footer text-center text-light p-4 my-4 rounded d-flex align-items-center justify-content-center shadow-lg"
      style={{ backgroundColor: color }}
    >
      <small className="fw-bold">
        &copy; 2021 All rights reserved. Designed by
        <span className="text-uppercase"> Hasan Goli</span>
      </small>
    </footer>
  );
};

export default Footer;
