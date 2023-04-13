import Layout from "@/src/layout/Layout";
const BlogGrid = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Grid"}>
      <div>
        <section className="gap no-top">
          <div className="container">
            <div className="splash-area blog">
              <h2>
                Latest News
                <br />
                From Our Blog
              </h2>
              <a href="#">Blog Grid</a>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-1.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-2.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>
                      Pellentesque odionisi euismod in,pharetra ultricies.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-3.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>Nam nulla quam, gravida non.</h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-4.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>Donec nec justo eget felis facilisis fermentum.</h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-5.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>
                      Nam duimi tincidunt quis accumsan porttitor, facilisis
                      luctus metus.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-6.jpg"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="#">
                    <h4>Fusce pellentesque suscipit nibh.</h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
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
                  prev page
                </a>
              </div>
              <div className="next">
                <a href="#">
                  next page
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
      </div>
    </Layout>
  );
};
export default BlogGrid;
