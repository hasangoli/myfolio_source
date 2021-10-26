import { useState } from "react";
import { HiColorSwatch } from "react-icons/hi";

const ColorChanger = ({ setColor }) => {
  const color01 = "#0dcaf0";
  const color02 = "#6C4A4A";
  const color03 = "#FF5151";
  const color04 = "#125C13";
  const color05 = "#09009B";
  const color06 = "#191A19";

  const [isOpen, setIsOpen] = useState(false);

  if (window.localStorage.getItem("color")) {
    setColor(window.localStorage.getItem("color"));
  } else {
    window.localStorage.setItem("color", color01);
  }

  return (
    <div
      className="position-fixed d-flex flex-row"
      style={{
        top: "10%",
        left: `${isOpen ? "10px" : "-120px"}`,
        zIndex: "1000",
        transition: "all .4s linear",
        cursor: "pointer",
      }}
    >
      <div
        className="shadow-lg rounded-3 row gap-1 p-3"
        style={{
          width: "120px",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color01,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color01);
            setIsOpen(false);
            window.localStorage.setItem("color", color01);
          }}
        ></div>
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color02,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color02);
            setIsOpen(false);
            window.localStorage.setItem("color", color02);
          }}
        ></div>
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color03,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color03);
            setIsOpen(false);
            window.localStorage.setItem("color", color03);
          }}
        ></div>
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color04,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color04);
            setIsOpen(false);
            window.localStorage.setItem("color", color04);
          }}
        ></div>
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color05,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color05);
            setIsOpen(false);
            window.localStorage.setItem("color", color05);
          }}
        ></div>
        <div
          className="rounded-3 shadow-lg col-3 m-1"
          style={{
            backgroundColor: color06,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setColor(color06);
            setIsOpen(false);
            window.localStorage.setItem("color", color06);
          }}
        ></div>
      </div>

      <div className="ms-4 mt-2" onClick={() => setIsOpen(!isOpen)}>
        <HiColorSwatch
          size="3rem"
          className="bg-white shadow-lg border border-2 p-1 rounded-3"
        />
      </div>
    </div>
  );
};

export default ColorChanger;
