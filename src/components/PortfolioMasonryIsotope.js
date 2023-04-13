import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
const PortfolioMasonryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".col-lg-3",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-lg-3",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );
  const activeBtn = (value) =>
    value === filterKey ? "active-work is-checked" : "";

  return (
    <section className="gap no-bottom">
      <div className="container">
        <div className="row">
          <div className="portfolios">
            <div
              className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              data-filter-group="color"
            >
              <button
                type="button"
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter
              >
                All
              </button>
              <button
                type="button"
                className={`c-pointer ${activeBtn("Design")}`}
                onClick={handleFilterKeyChange("Design")}
                data-filter=".Design"
              >
                Branding
              </button>
              <button
                type="button"
                className={`c-pointer ${activeBtn("Branding")}`}
                onClick={handleFilterKeyChange("Branding")}
                data-filter=".Branding"
              >
                Web Site
              </button>
              <button
                type="button"
                className={`c-pointer ${activeBtn("Development")}`}
                onClick={handleFilterKeyChange("Development")}
                data-filter=".Development"
              >
                Printing
              </button>
            </div>
            <div className="grid row align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-6 portfolio-img UI-Design Branding">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-1.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">
                        Aliquam Tincidunt Mauris
                      </a>
                    </h3>
                    <span>Quisque volutpat mattis eros.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 portfolio-img UX/UI-Design Branding">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-2.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-details-1">
                        Vestibulum Auctor Dapibus
                      </a>
                    </h3>
                    <span>Nullam malesuada erat ut turpis.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 Design Development">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-3.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Nunc Dignissim</a>
                    </h3>
                    <span>
                      Lorem ipsum dolor sitamet, consectetuer donecodio.
                    </span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 Branding Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-4.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">
                        Cras Ornare Tristique Elit
                      </a>
                    </h3>
                    <span>Quisque volutpat mattis eros.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 Branding  UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-5.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Fashion Flyer</a>
                    </h3>
                    <span>Nullam malesuada erat ut turpis. </span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 Design Development">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-6.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">
                        Trifold Restaurant Menu
                      </a>
                    </h3>
                    <span>Lorem ipsum dolor sitamet donecodio.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 UX/UI UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-7.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Photo Album</a>
                    </h3>
                    <span>Quisque volutpat mattis eros.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 Design Development Branding Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-8.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">
                        Minimalist Flyer Design
                      </a>
                    </h3>
                    <span>Nullam malesuada erat ut turpis.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-9.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Amalie's Bakery</a>
                    </h3>
                    <span>Nullam malesuada erat ut turpis.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-10.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Resume Tri-Fold</a>
                    </h3>
                    <span>
                      Suspendisse urnanibh viverranon, semper suscipit, posuere
                      a, pede.
                    </span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-11.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Annual Report</a>
                    </h3>
                    <span>Мiverranon semper posuere a, pede.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 UI-Design Design">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v1.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/portfolio-style-12.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v1.html">Rigel Brochure</a>
                    </h3>
                    <span>Quisque volutpat mattis semper pede.</span>
                    <a href="portfolio-single-v1.html">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioMasonryIsotope;
