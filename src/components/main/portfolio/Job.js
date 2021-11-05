const Job = ({ url, image, title, info, link = "", color }) => {
  return (
    <div className="portfolio col-lg-4 col-md-6 col-12 p-3 rounded d-flex">
      <a href={url} className="card" target="_blank" rel="noreferrer">
        <img src={image} className="card-img-top img-fluid" alt="Job" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: color }}>
            {title}
          </h5>
          <p className="card-text text-secondary d-flex align-items-center justify-content-between">
            <span>{info}</span>
            {link && (
              <span>
                <a
                  style={{ backgroundColor: color }}
                  className="btn text-white fw-bold rounded-pill"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </span>
            )}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Job;
