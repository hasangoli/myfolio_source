const Job = ({ url, image, title, info, link = "" }) => {
  return (
    <div className="portfolio col-lg-4 col-md-6 col-12 p-3 rounded">
      <a href={url} className="card" target="_blank" rel="noreferrer">
        <img src={image} className="card-img-top img-fluid" alt="Job" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-secondary d-flex justify-content-between">
            <span>{info}</span>
            {link && (
              <span>
                <a
                  className="link text-info"
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
