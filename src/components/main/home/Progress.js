const Progress = ({ skill, percentage, color }) => {
  return (
    <div className="col-11 my-2">
      <h6>{skill}</h6>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          // style={{
          //   backgroundColor: color,
          //   width: `${percentage}%`,
          // }}
          style={{ width: "100px" }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
