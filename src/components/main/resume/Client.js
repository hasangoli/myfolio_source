const Client = ({ src }) => {
  return (
    <div className="col-lg-2 col-4 p-lg-4 p-3">
      <div className="card border-0">
        <img src={src} className="card-img-top rounded" alt="Client" />
      </div>
    </div>
  );
};

export default Client;
