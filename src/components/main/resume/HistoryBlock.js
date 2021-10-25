const HistoryBlock = ({ title, date, info }) => {
  return (
    <div className="history-block col-10 ps-5 ms-3 pb-3">
      <h6 className="history-title">{title}</h6>
      <li className="history-date">
        <small>{date}</small>
      </li>
      <p className="history-info text-secondary">
        <small>{info}</small>
      </p>
    </div>
  );
};

export default HistoryBlock;
