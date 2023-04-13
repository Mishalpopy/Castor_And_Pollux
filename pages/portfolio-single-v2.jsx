import Layout from "@/src/layout/Layout";
const PortfolioSingleV2 = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Portfolio Single 2"}>
      <section className="gap no-top">
        <div className="container">
          <div className="title-blog">
            <h2>
              Vivat Vesti
              <br />
              Branding &amp; Lettering
            </h2>
            <a href="#">Portfolio Single</a>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/portfolio6.jpg"
                  />
                </figure>
                <p className="p-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. <br />
                  <br />
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos hymenaeos. Donec mi odio, faucibus at,
                  scelerisque quis, convallis in, nisi. Curabitur ullamcorper
                  ultricies nisi. Nam eget dui.
                  <br />
                  <br />
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Maecenas tempus, tellus
                  eget condimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos hymenaeos.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="portfolimg two hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/portfolio4.jpg"
                  />
                </figure>
              </div>
              <div className="portfolimg two hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/portfolio5.jpg"
                  />
                </figure>
              </div>
              <ul className="sidebar">
                <li>
                  <h4>Author : </h4>
                  <span>Jane Luna</span>
                </li>
                <li>
                  <h4>Date :</h4>
                  <span>August 10, 2020</span>
                </li>
                <li>
                  <h4>Category :</h4>
                  <a href="#">
                    <span>Digital Strategy</span>,
                  </a>
                  <a href="#">
                    <span>Branding</span>,
                  </a>
                  <a href="#">
                    <span>Design</span>
                  </a>
                </li>
                <li>
                  <h4>Share post :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="themebtu">
                    Launch Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="next-previous-page">
        <div className="container">
          <div className="next-previous">
            <div className="prev">
              <a href="#">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  style={{ enableBackground: "new 0 0 476.213 476.213" }}
                  xmlSpace="preserve"
                >
                  <polygon
                    points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                  />
                </svg>
                prev project
              </a>
            </div>
            <div className="next">
              <a href="#">
                next project
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  style={{ enableBackground: "new 0 0 476.213 476.213" }}
                  xmlSpace="preserve"
                >
                  <polygon
                    points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioSingleV2;
