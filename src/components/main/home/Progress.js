const Progress = ({ skill, percentage }) => {
  return (
    <div className="col-11 my-2">
      <h6>{skill}</h6>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
