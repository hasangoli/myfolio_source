const Progress = ({ skill, percentage, color: col }) => {
  return (
    <div className="col-11 my-2">
      <h6>{skill}</h6>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
