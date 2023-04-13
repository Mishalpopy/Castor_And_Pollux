import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("body").classList.add("page-loaded");
    }, 1500);
  }, []);

  return (
    <div className="preloader">
      <div>
        <div className="container">
          <div className="squarebox one" />
          <div className="squarebox two" />
          <div className="squarebox three" />
          <div className="squarebox two" />
          <div className="squarebox three" />
          <div className="squarebox four" />
          <div className="squarebox three" />
          <div className="squarebox four" />
          <div className="squarebox five" />
        </div>
      </div>
    </div>
  );
};
export default Preloader;
