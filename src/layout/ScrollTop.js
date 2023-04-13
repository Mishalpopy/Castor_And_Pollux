import { useLayoutEffect } from "react";
import { scrollTopActive } from "../utils";

const ScrollTop = () => {
  useLayoutEffect(() => {
    scrollTopActive();
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <a id="button" onClick={() => scrollTop()}></a>;
};
export default ScrollTop;
