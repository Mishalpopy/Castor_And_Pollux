import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        style={{ backgroundImage: "url(assets/img/hero-img.jpg)" }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              <span>Unlock</span>
              The Full Potential Of Your Business.{" "}
            </h2>
            <p>Creative concepting and visual design</p>
            <a href="services.html" className="themebtu full">
              More Services
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="small-services-color">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 32 32"
                    height={512}
                    viewBox="0 0 32 32"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m30.197 28.331-7.843-7.555c1.802-2.057 2.789-4.634 2.789-7.361 0-3.058-1.234-5.931-3.475-8.089-4.603-4.435-12.092-4.434-16.693 0-2.241 2.158-3.475 5.031-3.475 8.089s1.234 5.931 3.475 8.09c2.301 2.218 5.324 3.326 8.347 3.325 2.725 0 5.445-.91 7.642-2.712l7.892 7.602c.888.883 2.257-.532 1.341-1.389zm-23.88-8.216c-1.86-1.792-2.884-4.171-2.884-6.7 0-2.528 1.024-4.908 2.884-6.699 1.931-1.861 4.468-2.791 7.005-2.791s5.074.93 7.005 2.791c1.86 1.792 2.884 4.171 2.884 6.699 0 2.529-1.024 4.908-2.884 6.7-3.863 3.721-10.148 3.721-14.01 0z" />
                      <path d="m18.154 12.449h-3.866v-3.862c0-.533-.433-.965-.966-.965-.534 0-.966.432-.966.965v3.862h-3.866c-.534 0-.966.432-.966.965s.432.966.966.966h3.866v3.862c0 .533.433.965.966.965.534 0 .966-.432.966-.965v-3.862h3.866c.534 0 .966-.432.966-.965s-.433-.966-.966-.966z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services.html">Research And Discovery</a>
                    <span>Morbi interdum mollis sapien.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 418.945 418.945"
                    height={512}
                    viewBox="0 0 418.945 418.945"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m9.213 397.61h401.004c4.849 0 8.728-3.879 8.728-8.728s-3.879-8.728-8.728-8.728h-25.214v-233.232c0-4.849-3.879-8.243-8.728-8.728h-55.762c-4.849 0-8.728 3.879-8.728 8.728v233.717h-16.486v-188.623c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v188.622h-16.486v-141.102c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v141.103h-16.486v-90.19c0-4.849-3.879-8.728-8.728-8.728h-56.249c-4.849 0-8.728 3.879-8.728 8.728v90.19h-23.76v-350.576c0-4.849-3.879-8.728-8.728-8.728s-8.728 3.879-8.728 8.728v358.819c.97 4.849 4.849 8.728 9.213 8.728zm319.542-241.96h39.761v224.989h-39.761zm-90.189 44.61h39.761v180.379h-39.761zm-90.19 48.004h39.761v132.375h-39.761zm-89.704 50.913h39.761v81.462h-39.761z" />
                      <path d="m136.739 172.136 110.555-68.369-3.879 16.486c-.97 4.364 1.455 9.213 6.304 10.183 4.364.97 9.213-1.455 10.183-6.304l9.213-36.367c.97-4.849-.485-8.243-6.304-10.183l-36.367-9.213c-4.364-.97-9.213 1.455-10.183 6.304-.97 4.364 1.455 9.213 6.304 10.183l16.971 4.364-111.525 68.369c-3.879 2.424-5.334 7.758-2.909 11.637 3.394 4.85 8.728 4.85 11.637 2.91z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services.html">Planning For The Future</a>
                    <span>Phasellus lacinia, ullamcorper laoreet.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services lest mb-0">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M444.709,239.616v227.621H67.877V239.616H32.768v245.175c0,9.696,7.858,17.554,17.554,17.554h411.941
            c9.696,0,17.554-7.858,17.554-17.554V239.616H444.709z"
                    />
                    <path
                      d="M494.446,107.953H17.554C7.858,107.953,0,115.811,0,125.507v114.688c0,9.696,7.858,17.554,17.554,17.554h476.891
            c9.696,0,17.554-7.853,17.554-17.554V125.507C512,115.811,504.142,107.953,494.446,107.953z M476.891,222.647H35.109v-79.579
            h441.783V222.647z"
                    />
                    <path
                      d="M273.273,121.066c-1.194-4.552-30.152-111.411-114.7-111.411c-36.782,0-66.706,29.924-66.706,66.706
            c0,36.782,29.661,66.706,66.121,66.706h98.304c5.436,0,10.574-2.522,13.897-6.829S274.648,126.326,273.273,121.066z
             M157.989,107.959c-17.39,0-31.013-13.88-31.013-31.598c0-17.127,14.471-31.598,31.598-31.598
            c38.52,0,61.586,37.947,72.675,63.195H157.989z"
                    />
                    <path
                      d="M354.011,9.655c-84.547,0-113.506,106.859-114.7,111.411c-1.381,5.26-0.24,10.866,3.084,15.173
            c3.324,4.307,8.455,6.829,13.897,6.829h98.304c36.46,0,66.121-29.924,66.121-66.706C420.718,39.579,390.794,9.655,354.011,9.655z
             M354.597,107.959h-73.33c11.007-25.249,34.003-63.195,72.751-63.195c17.127,0,31.598,14.471,31.598,31.598
            C385.615,94.079,371.993,107.959,354.597,107.959z"
                    />
                    <rect
                      x="238.738"
                      y="125.513"
                      width="35.109"
                      height="359.278"
                    />
                  </svg>
                  <div>
                    <a href="services.html">Building Your Brand</a>
                    <span>Pulvinar risus, vitae facilisis dolor.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands-we-work one gap">
        <div className="container">
          <BrandSlider />
        </div>
      </div>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img alt="img" src="assets/img/welcome-1.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/welcome-2.jpg"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
              <div className="heading design-enjoy">
                <h6>Castor and Pollux</h6>
                <h2> We're an Independent Design &amp; Development Agency.</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="welcome-text">
                <h6 className="pt-4 pb-5">
                Castor and Pollux is a design and development agency. We offer website design, branding, app development, and digital marketing. Our approach is collaborative, and we deliver high-quality solutions that help our clients achieve their goals. Let us turn your dreams into reality.
                </h6>
                <h5>User Experience</h5>
                <p>
                Castor and Pollux User Experience is a design agency focused on creating exceptional digital experiences. We specialize in user interface design, user research, and usability testing. Our goal is to help our clients create intuitive, user-friendly products that engage and delight their audiences. Let us help you elevate your digital presence.{" "}
                </p>
                <h5>Digital Design</h5>
                <p>
                Castor and Pollux Digital Design is a design agency that specializes in creating visually stunning and effective digital experiences. Our services include website design, app design, branding, and digital marketing. We work closely with our clients to understand their unique needs and objectives and deliver creative solutions that help them stand out in the digital landscape. Let us help you make a lasting impression online.
                </p>
                <a href="services.html" className="themebtu">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" alt="line" src="assets/img/line.jpg" />
      </section>
      <section className="how-it-works gap no-top">
        <div className="container">
          <div className="heading">
            <h6>How It Works?</h6>
            <h2> We Are Strategic- Creative Digital Agency.</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row pt-4">
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O1/</h2>
                <div className="pl-80">
                  <h4>Submit Your Design Request</h4>
                  <p>
                  Request custom design. Our experts will deliver results tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O2/</h2>
                <div className="pl-80">
                  <h4>We Start Workin</h4>
                  <p>
                  Action time. Our team gets to work and brings your vision to life.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O3/</h2>
                <div className="pl-80">
                  <h4>Get Your Projects Done! </h4>
                  <p>
                  Final delivery. Enjoy the results of our hard work and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project gap">
        <div className="container">
          <div className="heading-boder">
            <h2>
              Recently
              <br />
              Completed<span>Projects</span>
            </h2>
            <p>We Help You Build An Online Brand</p>
          </div>
          <Swiper
            {...projectsswiper}
            className="swiper-container projectsswiper"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="project-data">
                  <a href="portfolio-single-v1.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/project-1.jpg"
                    />
                  </a>
                  <div className="project-text">
                    <h5>Maximus </h5>
                    <p>Join On The Job Training (OJT)  program to enhance your skills..</p>
                    <a href="portfolio-single-v1.jsx">View Project</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data">
                  <a href="portfolio-single-v1.jsx">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/project-2.jpg"
                    />
                  </a>
                  <div className="project-text">
                    <h5>Maximus and Saudia Arabia Human Resources Developement</h5>
                    <p>Virtual Job Fair</p>
                    <a href="portfolio-single-v1.jsx">View Project</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data">
                  <a href="portfolio-single-v1.jsx">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/project-3.jpg"
                    />
                  </a>
                  <div className="project-text">
                    <h5>Sinatra Holdings</h5>
                    <p>Corporate Website</p>
                    <a href="portfolio-single-v1.jsx">View Project</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="project-data">
                  <a href="portfolio-single-v1.jsx">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/project-1.jpg"
                    />
                  </a>
                  <div className="project-text">
                    <h5>Cosmetics Mockup Set Template</h5>
                    <p>Quisque volutpat mattis eros.</p>
                    <a href="portfolio-single-v1.jsx">View Project</a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
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
          <div className="btugap">
            <a href="portfolio-grid.html" className="themebtu">
              View More Works
            </a>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-1"></div>
            <div className="style-shapes-2">
              <img alt="shap-4" src="assets/img/shap-4.png" />
            </div>
            <div className="style-shapes-3"></div>
            <div className="style-shapes-4">
              <img alt="dots1" src="assets/img/dots1.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>Why Partner With Us?</h6>
            <h2>What Our Clients Said About Castor And Pollux</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img alt="man" src="assets/img/reaview-1.jpg" />
                  <p>
                    “Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod in, pharetra a, ultricies in, diam.”
                  </p>
                  <div className="boder" />
                  <span>
                    Kalem Patel
                    <br />
                    Manager of Castor And Pollux
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img alt="man" src="assets/img/reaview-2.jpg" />
                  <p>
                    “Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat.”
                  </p>
                  <div className="boder" />
                  <span>
                    Bernard Castro
                    <br />
                    Owner of Love Digital
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img alt="man" src="assets/img/reaview-3.jpg" />
                  <p>
                    “Quisque a lectus. Donec consectetuer ligula vulputate sem
                    tristique cursus. Nam nulla quam, gravida non, commodo a.”
                  </p>
                  <div className="boder" />
                  <span>
                    Lori Moses
                    <br />
                    Manager of Digitalagency
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <img alt="man" src="assets/img/reaview-4.jpg" />
                  <p>
                    “Morbi in sem quis dui placerat ornare. Pellentesque odio
                    nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                    Cras consequat.”
                  </p>
                  <div className="boder" />
                  <span>
                    Kalem Patel
                    <br />
                    Manager of Castor And Pollux
                  </span>
                </div>
              </SwiperSlide>
            </div>
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
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <section
        className="gap no-bottom video-section"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Let’s Start On Your Case <span>Together</span>
            </h2>
            <p>Pellentesque aliquet nibh necurna.</p>
          </div>
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="video-img">
                <img className="w-100" alt="img" src="assets/img/video.jpg" />
                <a
                  data-fancybox
                  href=""
                >
                 
                </a>
              </div>
            </div>
            <div className="tp-hero__shapes">
              <div className="style-shapes-2">
                <img alt="shap-4" src="assets/img/shap-1.png" />
              </div>
              <div className="style-shapes-4">
                <img alt="dots1" src="assets/img/shap-2.png" />
              </div>
              <div className="style-shapes-5">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-6">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-7">
                <img alt="dots1" src="assets/img/shap-5.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="get-in-touch gap">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-xl-10">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="heading">
                      <h6>Get In Touch</h6>
                      <h2> Kick Start Your Awesome Project Now!</h2>
                      <img alt="line" src="assets/img/headingline.png" />
                      <p>
                      Let's create something great together. Contact Castor and Pollux for your Digital needs
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <form className="touch">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email address *"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone (optional)"
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            placeholder="Your message *"
                            defaultValue={""}
                          />
                        </div>
                        <div className="btugap">
                          <a href="#" className="themebtu full">
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-blog gap">
        <div className="container">
          <div className="heading">
            <h6>our blog</h6>
            <h2>News and Thoughts</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...latestswiper} className="swiper-container latestswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-1.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-2.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-3.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-4.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-5.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-3.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="latest-blog-post">
                  <a href="blog-single-post.html">
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/latest-blog-4.jpg"
                    />
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2023</span>
                  </a>
                  <a href="blog-single-post.html">
                    <h4>
                      Class aptent taciti sociosqu ad litora torquent per.
                    </h4>
                  </a>
                  <span>by Jane Luna | Digital Strategy</span>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
