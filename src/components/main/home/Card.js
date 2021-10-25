const Card = ({ image, title, text }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 pb-lg-0 pb-4">
      <div className="card py-3 text-center">
        <span className="card-img-top">{image}</span>
        <div className="card-body">
          <h5 className="card-title fs-5">{title}</h5>
          <small className="card-text">{text}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
