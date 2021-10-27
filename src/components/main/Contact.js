const Contact = ({ color }) => {
  return (
    <div className="contact p-lg-5 p-3 pt-lg-4 pt-2 bg-white rounded shadow-lg my-5">
      <div className="row">
        <div className="col-md-6 col-12 mb-4 mb-lg-0">
          <h5 className="my-4">Contact Form</h5>
          <form action="">
            <div className="row">
              <div className="mb-3 col-lg-6 col-12">
                <label for="text" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="John Doe"
                  disabled
                />
              </div>

              <div className="mb-3 col-lg-6 col-12">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="textarea" className="form-label">
                Enter your text here
              </label>
              <textarea
                className="form-control"
                id="textarea"
                rows="3"
                disabled
              ></textarea>
            </div>

            <button
              className="btn rounded-pill text-light py-2 px-5"
              style={{ backgroundColor: color }}
              disabled
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6 col-12 p-lg-5 p-3 pt-lg-4 pt-2">
          <h5 className="my-4">Contact Information</h5>

          <ul>
            <li className="fw-bold mb-3">
              Address:
              <br />
              <span className="text-secondary fw-normal">
                <a
                  className="text-decoration-none"
                  style={{ color: color }}
                  href="https://www.google.com/maps/place/Safadasht+Industrial+City,+Tehran+Province,+Iran/@35.6805179,50.8254145,14z/data=!4m5!3m4!1s0x3f8d99bc6dd2faff:0x4558f27e045d228d!8m2!3d35.6806963!4d50.8196259"
                  rel="noreferrer"
                  target="_blank"
                >
                  Tehran, Malard, Safadasht
                </a>
              </span>
            </li>
            <li className="fw-bold my-3">
              Phone Number:
              <br />
              <span className="text-secondary fw-normal">
                <a
                  className="text-decoration-none"
                  style={{ color: color }}
                  href="tel:+989107724733"
                >
                  +98 (910) 772 47 33
                </a>
              </span>
            </li>
            <li className="fw-bold my-3">
              Telegram:
              <br />
              <span className="text-secondary fw-normal">
                <a
                  className="text-decoration-none"
                  style={{ color: color }}
                  href="https://t.me/unconsciousman"
                >
                  Hasan Goli
                </a>
              </span>
            </li>
            <li className="fw-bold my-3">
              Email:
              <br />
              <span className="text-secondary fw-normal">
                <a
                  className="text-decoration-none"
                  style={{ color: color }}
                  href="mailto:mrhasangoli@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  mrhasangoli@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
