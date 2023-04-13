import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <div className="counter" data-from="0" data-to={end} ref={countUpRef}>
            count
          </div>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
