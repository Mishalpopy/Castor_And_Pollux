import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Contacts = () => {
  return (
    <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>Let Us Know What You're Looking For</h2>
            <a href="#">Get in Touch</a>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Start Your Project With Us.</h6>
            <h2>Let's Talk</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="name" placeholder="Your Name *" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Company *"
                    />
                  </div>
                </div>
                <input type="text" name="name" placeholder="Your Email *" />
                <textarea placeholder="Your Message *" defaultValue={""} />
                <button className="themebtu">Submit</button>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>Address : </h4>
                  <span>
                    418 Orange Street
                    <br />
                    Portsmouth, VA 23703
                  </span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="callto:0987123456678">
                    <span>0987 123 456 678</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:contact@terio.com">
                    <span>contact@castorandpollux.com</span>
                  </a>
                </li>
                <li>
                  <h4>Find us :</h4>
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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988214366!2d-74.25986540376853!3d40.69767006922205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1672222515624!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <section className="offices gap" style={{ backgroundColor: "#f3f8fb" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading">
                <h2>Offices</h2>
                <p>
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
              </div>
            </div>
            <div className="col-xl-8">
              <Swiper
                {...studiesswiper}
                className="swiper-container studiesswiper"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-1.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>New York</h5>
                        <p>
                          92 Greenwich St, New York, NY 10006, United States
                        </p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-2.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Roma</h5>
                        <p>Via Carlo Alberto, 26a, 00185 Roma RM, Italy</p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-3.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Barcelona</h5>
                        <p>d'Aragó, 284, 08009 Barcelona, Spain</p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
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
    </Layout>
  );
};
export default Contacts;
