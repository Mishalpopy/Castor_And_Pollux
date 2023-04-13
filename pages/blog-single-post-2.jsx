import Layout from "@/src/layout/Layout";
import { blogswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogSinglePost2 = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>Latest News From Our Blog</h2>
            <a href="#">Blog Slider</a>
          </div>
          <Swiper {...blogswiper} className="swiper-container blogswiper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-3.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>August 10, 2023</span>
                      </a>
                      <a href="#">
                        <h2>Donec odio. Quisque volutpat mattis eros.</h2>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <span>by Jane Luna | Digital Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>August 10, 2023</span>
                      </a>
                      <a href="#">
                        <h2>Donec odio. Quisque volutpat mattis eros.</h2>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <span>by Jane Luna | Digital Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blog-4.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>August 10, 2023</span>
                      </a>
                      <a href="#">
                        <h2>Donec odio. Quisque volutpat mattis eros.</h2>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <span>by Jane Luna | Digital Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-next">
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
            </div>
            <div className="swiper-button-prev">
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
            </div>
          </Swiper>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
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
                  <h4>Class aptent taciti sociosqu ad litora torquent per.</h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
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
                  <h4>Pellentesque odionisi euismod in,pharetra ultricies.</h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
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
            <div className="col-xl-3 col-lg-4 col-md-6">
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/latest-blog-7.jpg"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>
                <a href="#">
                  <h4>Morbi in sem quis dui placerat ornare.</h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/latest-blog-8.jpg"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>
                <a href="#">
                  <h4>
                    Pellentesque odionisi euismod in, pharetra ultricies in
                    diam.
                  </h4>
                </a>
                <span>by Jane Luna | Digital Strategy</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/latest-blog-9.jpg"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>
                <a href="#">
                  <h4>Quisque a lectus.</h4>
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
export default BlogSinglePost2;
