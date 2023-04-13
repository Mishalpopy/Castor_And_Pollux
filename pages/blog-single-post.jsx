import Layout from "@/src/layout/Layout";
const BlogSinglePost = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>Pellentesque odionisi pharetra ultricies in diam.</h2>
            <a href="#">Blog Single Post</a>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item">
                <img alt="img" src="assets/img/blog-1.jpg" />
                <h6>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos hymenaeos. Donec mi odio, faucibusat,
                  scelerisque quis, convallis inisi. Curabitur ullamcorper
                  ultricies nisi.
                </h6>
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
                  Aenean viverra rhoncus pede. Phasellus volutpat, metus eget
                  egestas mollis, lacus lacus blandit dui, id egestas quam
                  mauris ut lacus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Suspendisse potenti. In turpis.
                  Praesent congue erat at massa. Aenean massa. Sed cursus turpis
                  vitae tortor. Cras non dolor. Suspendisse enim turpis, dictum
                  sed iaculis condimentum nec nisi.
                </p>
                <div className="quote-bg">
                  <img alt="quote" src="assets/img/quote.png" />
                  <h6>
                    “ Phasellus volutpat, metus eget egestas mollis, lacus lacus
                    blandit dui, id egestas quam mauris ut lacus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Suspendisse potenti. In turpis. ”
                  </h6>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-5 ">
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blog-2.jpg"
                  />
                </div>
                <div className="col-lg-7 pl-60">
                  <h6 className="pt-lg-0 pt-5 pb-4">
                    Donec modio, faucibusat, scelerisque quis, convallis inisi.
                    Curabitur ullamcorper ultricies nisi.
                  </h6>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Maecenas
                    tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero, sit amet adipiscing sem neque sed ipsum. <br />
                    <br />
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos hymenaeos. Donec mi odio, faucibus at,
                    scelerisque quis, convallis in, nisi. Curabitur ullamcorper
                    ultricies nisi.
                  </p>
                </div>
              </div>
              <p className="p-30">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Maecenas tempus, tellus
                eget condimentum rhoncus, sem quam semper libero, sit amet
                adipiscing sem neque sed ipsum. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos hymenaeos.
              </p>
              <div className="next-previous-page two">
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
                          style={{
                            enableBackground: "new 0 0 476.213 476.213",
                          }}
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
                          style={{
                            enableBackground: "new 0 0 476.213 476.213",
                          }}
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
            <div className="col-xl-4 pl-60">
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
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="gap blog-recent-posts">
        <div className="container">
          <h4 className="mb-5">Recent Posts</h4>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/latest-blog-1.jpg"
                />
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>
                <a href="#">
                  <h4>Class aptent taciti sociosqu ad litora torquent per.</h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/latest-blog-2.jpg"
                />
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>
                <a href="#">
                  <h4>Pellentesque odionisi euismod in,pharetra ultricies.</h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/latest-blog-3.jpg"
                />
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post mb-0">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/latest-blog-4.jpg"
                />
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
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogSinglePost;
