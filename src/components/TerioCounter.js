import Counter from "./Counter";

const TerioCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={12000} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>Finished </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={850} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>Happy Client</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={9} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>Years in Business</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text mb-0">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={36} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>Experts</span>
        </div>
      </div>
    </div>
  );
};
export default TerioCounter;
