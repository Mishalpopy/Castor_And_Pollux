import Layout from "@/src/layout/Layout";
const PortfolioSingleV1 = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Portfolio Single 1"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>Vivat Vesti Branding &amp; Lettering</h2>
            <a href="#">Portfolio Single</a>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/portfolio1.jpg"
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
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolimg hoverstyle">
                    <figure>
                      <img
                        alt="img"
                        className="w-100"
                        src="assets/img/portfolio2.jpg"
                      />
                    </figure>
                    <span>Aliquam tincidunt mauris eu risus.</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="portfolimg hoverstyle">
                    <figure>
                      <img
                        alt="img"
                        className="w-100"
                        src="assets/img/portfolio3.jpg"
                      />
                    </figure>
                    <span>Nunc dignissim risus id metus.</span>
                  </div>
                </div>
              </div>
              <p className="p-30">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Maecenas tempus, tellus
                eget condimentum rhoncus, sem quam semper libero, sit amet
                adipiscing sem neque sed ipsum. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos hymenaeos.
              </p>
            </div>
            <div className="col-xl-4 pl-60">
              <ul className="sidebar">
                <li>
                  <h4>Project Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p>
                </li>
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
      <section className="gap blog-recent-posts">
        <div className="container">
          <h4 className="mb-5">Our Other Projects</h4>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="portfolios-three hoverstyle">
                <figure>
                  <img
                    alt="portfolios img"
                    className="w-100"
                    src="assets/img/portfolio-two-3.jpg"
                  />
                </figure>
                <div className="portfolios-data">
                  <a href="#">
                    <h4>Boarding Pass Wedding Invitation</h4>
                  </a>
                  <a href="#">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="portfolios-three hoverstyle">
                <figure>
                  <img
                    alt="portfolios img"
                    className="w-100"
                    src="assets/img/portfolio-two-4.jpg"
                  />
                </figure>
                <div className="portfolios-data">
                  <a href="#">
                    <h4>Boarding Pass Wedding Invitation</h4>
                  </a>
                  <a href="#">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="portfolios-three hoverstyle">
                <figure>
                  <img
                    alt="portfolios img"
                    className="w-100"
                    src="assets/img/portfolio-two-5.jpg"
                  />
                </figure>
                <div className="portfolios-data">
                  <a href="#">
                    <h4>Boarding Pass Wedding Invitation</h4>
                  </a>
                  <a href="#">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="portfolios-three hoverstyle">
                <figure>
                  <img
                    alt="portfolios img"
                    className="w-100"
                    src="assets/img/portfolio-two-6.jpg"
                  />
                </figure>
                <div className="portfolios-data">
                  <a href="#">
                    <h4>Boarding Pass Wedding Invitation</h4>
                  </a>
                  <a href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PortfolioSingleV1;
