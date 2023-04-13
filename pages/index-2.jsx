import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { partnerswiper, testimonialsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index2 = () => {
  return (
    <Layout noHeaderBg pageName={"Home 2"}>
      <section>
        <Swiper className="swiper-container herotwoswiper">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="hero-section-one two"
                style={{ backgroundImage: "url(assets/img/hero-img-1.jpg)" }}
              >
                <div className="container">
                  <div className="heading-boder">
                    <h2>
                      Digital Agency With A<span>Passion</span> For Marketing.
                    </h2>
                    <p>For Small-To-Medium Sized Businesses</p>
                    <a href="services.html" className="themebtu full">
                      More Services
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="hero-section-one two"
                style={{ backgroundImage: "url(assets/img/hero-img-2.jpg)" }}
              >
                <div className="container">
                  <div className="heading-boder">
                    <h2>
                      Digital Agency With A<span>Passion</span> For Marketing.
                    </h2>
                    <p>For Small-To-Medium Sized Businesses</p>
                    <a href="services.html" className="themebtu full">
                      More Services
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination" />
        </Swiper>
      </section>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="graph">
                <img alt="img" src="assets/img/graph-1.png" />
              </div>
            </div>
            <div className="col-lg-6 p-sm-0">
              <div className="heading">
                <h6>What We Do</h6>
                <h2>
                  {" "}
                  Expert in Leveraging Available Budgets to Find Peak
                  Performance.
                </h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="marketing">
                <h4>
                  Need help with your Digital Marketing?
                  <br />
                  Let us do what we do best so you can focus on running your
                  business
                </h4>
                <p>
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh.
                </p>
                <a href="about.html" className="themebtu">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="heading">
                <h6>Designed to Grow Your Business</h6>
                <h2> Sales Strategy and Conversion Optimization</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="marketing two">
                <p className="pt-3">
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh.
                </p>
              </div>
              <div className="successful">
                <div className="d-flex">
                  <h3>600+</h3>
                  <p>Successful websites launched by our team since 2011</p>
                </div>
                <div className="separator" />
                <div className="d-flex">
                  <h3>200%</h3>
                  <p>
                    Most of our SEO campaigns double their traffic within 6
                    months
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-5">
              <div className="graph">
                <img alt="img" className="w-100" src="assets/img/graph-2.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="brands-we-work gap">
        <div className="container">
          <h6>Brands We Work With.</h6>
          <BrandSlider />
        </div>
      </div>
      <section className="sercives gap">
        <div className="container">
          <div className="heading-boder two">
            <h2>
              We’ll Show You How It’s <span>Done</span>
            </h2>
            <p>We are an always curious, strategic-creative digital agency</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-1.jpg"
                />
                <div className="sercive-style-text">
                  <h6>Search Engine Optimization</h6>
                  <div className="boder" />
                  <p>
                    Nullam malesuada erat ut turpis. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                  <a href="services.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-2.jpg"
                />
                <div className="sercive-style-text">
                  <h6>
                    Awesome
                    <br /> Creative Design
                  </h6>
                  <div className="boder" />
                  <p>
                    Quisque volutpat mattis eros.Nullam malesuada erat ut
                    turpis. Suspendisse urnanibh.
                  </p>
                  <a href="services.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-3.jpg"
                />
                <div className="sercive-style-text">
                  <h6>
                    Digital
                    <br /> Production
                  </h6>
                  <div className="boder" />
                  <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                  <a href="services.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style mb-0">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-4.jpg"
                />
                <div className="sercive-style-text">
                  <h6>
                    Social Media
                    <br /> Marketing
                  </h6>
                  <div className="boder" />
                  <p>
                    Suspendisse urna nibh, viverra non, semper suscipit, posuere
                    a, pede.
                  </p>
                  <a href="services.html">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 ">
              <div className="strategic-sercives">
                <h2>O1/</h2>
                <div>
                  <h4>Transparent</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ">
              <div className="strategic-sercives">
                <h2>O2/</h2>
                <div>
                  <h4>Proactive</h4>
                  <p>
                    Phasellus hendrerit. Pellentesque aliquet nibh necurna. In
                    nisineque, aliquet vel, dapibus id, mattis vel, nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ">
              <div className="strategic-sercives mb-0">
                <h2>O3/</h2>
                <div>
                  <h4>Affordable</h4>
                  <p>
                    In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                    Sed pretium, ligula sollicitudin laoreet viverra.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-case-studies gap">
        <div className="container">
          <div className="heading-boder two">
            <h2>Case Studies</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="case-studies-two">
                <figure>
                  <a href="portfolio-single-v2.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/case-studies-4.jpg"
                    />
                  </a>
                </figure>
                <div className="case-studies-text">
                  <h5>
                    <a href="portfolio-single-v1.html">
                      Aliquam Tincidunt Mauris
                    </a>
                  </h5>
                  <ul>
                    <li>Design,</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="case-studies-two">
                <figure>
                  <a href="portfolio-single-v2.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/case-studies-5.jpg"
                    />
                  </a>
                </figure>
                <div className="case-studies-text">
                  <h5>
                    <a href="portfolio-single-v1.html">
                      Aliquam Tincidunt Mauris
                    </a>
                  </h5>
                  <ul>
                    <li>Design,</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
              <div className="case-studies-two">
                <figure>
                  <a href="portfolio-single-v2.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/case-studies-6.jpg"
                    />
                  </a>
                </figure>
                <div className="case-studies-text">
                  <h5>
                    <a href="portfolio-single-v1.html">
                      Aliquam Tincidunt Mauris
                    </a>
                  </h5>
                  <ul>
                    <li>Design,</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="case-studies-two">
                <figure>
                  <a href="portfolio-single-v2.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/case-studies-7.jpg"
                    />
                  </a>
                </figure>
                <div className="case-studies-text">
                  <h5>
                    <a href="portfolio-single-v1.html">
                      Aliquam Tincidunt Mauris
                    </a>
                  </h5>
                  <ul>
                    <li>Design,</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
              <div className="case-studies-two">
                <figure>
                  <a href="portfolio-single-v2.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/case-studies-8.jpg"
                    />
                  </a>
                </figure>
                <div className="case-studies-text">
                  <h5>
                    <a href="portfolio-single-v1.html">
                      Aliquam Tincidunt Mauris
                    </a>
                  </h5>
                  <ul>
                    <li>Design,</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="btugap">
            <a href="portfolio-metro.html" className="themebtu">
              View More Works
            </a>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-4">
              <img alt="dots1" src="assets/img/shap-6.png" />
            </div>
            <div className="style-shapes-5">
              <img alt="dots1" src="assets/img/shap-3.png" />
            </div>
            <div className="style-shapes-6">
              <img alt="dots1" src="assets/img/shap-2.png" />
            </div>
            <div className="style-shapes-7">
              <img alt="dots1" src="assets/img/shap-5.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <Swiper
            {...testimonialsswiper}
            className="swiper-container testimonialsswiper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="testimonials">
                <img alt="img" src="assets/img/testimonials-1.jpg" />
                <i className="fa-solid fa-quote-right" />
                <div>
                  <h6>A multi-disciplinary team of creators ...</h6>
                  <p>
                    " Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, eros pede semper est, vitae luctus metus libero eu
                    augue. "
                  </p>
                  <span>Edward Kim (Marketing Manager)</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials">
                <img alt="img" src="assets/img/testimonials-2.jpg" />
                <i className="fa-solid fa-quote-right" />
                <div>
                  <h6>A multi-disciplinary team of creators ...</h6>
                  <p>
                    " " Praesent elementum hendrerit tortor. Sed semper lorem at
                    felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                    neque euismod dui, eu pulvinar nunc sapien ornare nisl. “
                  </p>
                  <span>Edward Kim (Marketing Manager)</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials">
                <img alt="img" src="assets/img/testimonials-1.jpg" />
                <i className="fa-solid fa-quote-right" />
                <div>
                  <h6>A multi-disciplinary team of creators ...</h6>
                  <p>
                    " Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, eros pede semper est, vitae luctus metus libero eu
                    augue. "
                  </p>
                  <span>Edward Kim (Marketing Manager)</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials">
                <img alt="img" src="assets/img/testimonials-2.jpg" />
                <i className="fa-solid fa-quote-right" />
                <div>
                  <h6>A multi-disciplinary team of creators ...</h6>
                  <p>
                    " " Praesent elementum hendrerit tortor. Sed semper lorem at
                    felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                    neque euismod dui, eu pulvinar nunc sapien ornare nisl. “
                  </p>
                  <span>Edward Kim (Marketing Manager)</span>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <section className="gap team-section">
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Our <span>Team</span> &amp; Digital Heroes
            </h2>
            <p>We are an always curious, strategic-creative digital agency</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/team-1.jpg" />
                <div className="team-member-text">
                  <h6>
                    <a href="team.html">Klay Carson</a>
                  </h6>
                  <p>Product Manager</p>
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
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/team-2.jpg" />
                <div className="team-member-text">
                  <h6>
                    <a href="team.html">Naomi Norman</a>
                  </h6>
                  <p>Product Manager</p>
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
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member">
                <img className="w-100" alt="img" src="assets/img/team-3.jpg" />
                <div className="team-member-text">
                  <h6>
                    <a href="team.html">Bert Graham</a>
                  </h6>
                  <p>Product Manager</p>
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
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-member mb-0">
                <img className="w-100" alt="img" src="assets/img/team-4.jpg" />
                <div className="team-member-text">
                  <h6>
                    <a href="team.html">Bert Graham</a>
                  </h6>
                  <p>Product Manager</p>
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
                </div>
              </div>
            </div>
          </div>
          <div className="btugap">
            <a href="about.html" className="themebtu">
              More About Us
            </a>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="blog-posts gap no-top">
        <div className="container">
          <div className="heading-boder two">
            <h2>Latest Blog Posts</h2>
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Suspendisse mauris. Fusce accumsan mollis eros.
                    </a>
                  </h4>
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing...
                  </p>
                  <span>by Jane Luna</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Vivamus a mauris eget arcugravida tristique. Nunc iaculis
                      mi in ante.
                    </a>
                  </h4>
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing...
                  </p>
                  <span>by Jane Luna</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Suspendisse mauris. Fusce accumsan mollis eros.
                    </a>
                  </h4>
                  <p>
                    Morbi purus libero, faucibus adipiscing, commodo quis,
                    gravida id, est. Praesent elementum hen drerit tortor. Sed
                    semper lorem at felis.
                  </p>
                  <span>by Nick Quintero</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Class aptent taciti sociosqu ad litora torquent per
                    </a>
                  </h4>
                  <p>
                    Praesent elementum hendrerit tortor. Sed semper lorem at
                    felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                    neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                    Phasellus pede
                  </p>
                  <span>by Jane Luna</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Vivamus a mauris eget arcugravida tristique. Nunc iaculis
                      mi in ante.
                    </a>
                  </h4>
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing, commodo quis, gravida id, est. Sed
                    lectus...
                  </p>
                  <span>by Jane Luna</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="blog-posts-text">
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <h4>
                    <a href="blog-single-post.html">
                      Suspendisse mauris. Fusce accumsan mollis eros.
                    </a>
                  </h4>
                  <p>
                    Morbi purus libero, faucibus adipiscing, commodo quis,
                    gravida id, est. Praesent elementum hen drerit tortor. Sed
                    semper lorem at felis.
                  </p>
                  <span>by Nick Quintero</span>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <div className="container">
        <div className="awesome-project">
          <h4>Let's Start an Awesome Project Now!</h4>
          <a href="contacts.html" className="themebtu full">
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default Index2;
