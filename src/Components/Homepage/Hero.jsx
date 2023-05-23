import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from "../Images/video-1.mp4"
import video2 from "../Images/video-2.mp4"
import video3 from "../Images/Video2-13.mp4"


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    slidesToShow:2,
    beforeChange: (current, next) => setCurrentSlide(next),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 3,
    //       infinite: true,
          
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
    
  };


  return (
    <div>
   <section
  data-particle_enable="false"
  data-particle-mobile-disabled="false"
  className="elementor-section elementor-top-section elementor-element elementor-element-d5e3db3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
  data-id="d5e3db3"
  data-element_type="section"
>
  <div className="custome-slider elementor-container elementor-column-gap-default">
    <div
      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bd4ca57"
      data-id="bd4ca57"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-1c07943 elementor-widget elementor-widget-html"
          data-id="1c07943"
          data-element_type="widget"
          data-widget_type="html.default"
        >
          <div className="elementor-widget-container">
            <section
              className="s-BannerVideo-22"
              style={{ padding: 0, margin: 0 }}
            >
            <div className="s-BannerVideo-22__Slider">
      <Slider {...settings}>
        <div>
          <div data-title="CRM consultants" style={{ width: "100%", display: "inline-block" }}>
            <video
              title=""
              className="s-BannerVideo-22__Video"
              muted="true"
              playsInline=""
              loop="true"
              height="100%"
              autoplay="true"
            >
              <source
                src={video1}
                type="video/mp4"
              />
            </video>
            <div className="s-BannerVideo-22__Content">
              <div className="row l-ContentColumn">
                <div className="columns xsmall-24">
                  <h1 className="t-MainHeader">
                    <span className="weare">We are </span>
                    <br />
                    CRM Consultants
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-title="system Integrator" style={{ width: "100%", display: "inline-block" }}>
            <video
              title=""
              className="s-BannerVideo-22__Video"
              muted="true"
              playsInline=""
              loop=""
              height="100%"
              autoplay="true"
            >
              <source
                src={video2}
                type="video/mp4"
              />
            </video>
            <div className="s-BannerVideo-22__Content">
              <div className="row l-ContentColumn">
                <div className="columns xsmall-24">
                  <h1 className="t-MainHeader">
                    <span className="weare">We are </span>{" "}
                    <br />
                    System Integrators
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-title="TECHNOLOGY EXPERTS"
            style={{ width: "100%", display: "inline-block" }}
          >
            <video
              title=""
              className="s-BannerVideo-22__Video"
              muted="true"
              playsInline=""
              loop=""
              height="100%"
              autoplay="true"
            >
              <source
                src={video3}
                type="video/mp4"
              />
            </video>
            <div className="s-BannerVideo-22__Content">
              <div className="row l-ContentColumn">
                <div className="columns xsmall-24">
                  <h1 className="t-MainHeader">
                    <span className="weare">We are </span>
                    <br />
                    Technology Experts
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-title="CLOUD ENGINEERS"
            style={{ width: "100%", display: "inline-block" }}
          >
            <video
              title=""
              className="s-BannerVideo-22__Video"
              muted=""
              playsInline=""
              loop=""
              height="100%"
            >
              <source
                src="https://staging.3li.global/wp-content/uploads/2023/01/video-4.mp4"
                type="video/mp4"
              />
            </video>
            <div className="s-BannerVideo-22__Content">
              <div className="row l-ContentColumn">
                <div className="columns xsmall-24">
                  <h1 className="t-MainHeader">
                    <span className="weare">We are </span>{" "}
                    <br />
                    Cloud Engineers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    <ul className="s-BannerVideo-22__Dots l-ContentColumn">
        <li className={currentSlide === 0 ? 'slick-active' : ''}>
          <button
            tabIndex={0}
            className="s-BannerVideo-22__Dot"
            data-elementclick="section-slider-main-tab"
            data-elementname="CRM consultants"
            height={600}
          >
            <span className="s-BannerVideo-22__DotTitle">CRM consultants</span>
            <span>01</span>
          </button>
        </li>
        <li className={currentSlide === 1 ? 'slick-active' : ''}>
          <button
            tabIndex={0}
            className="s-BannerVideo-22__Dot"
            data-elementclick="section-slider-main-tab"
            data-elementname="system Integrator"
          >
            <span className="s-BannerVideo-22__DotTitle">system Integrator</span>
            <span>02</span>
          </button>
        </li>
        <li className={currentSlide === 2 ? 'slick-active' : ''}>
          <button
            tabIndex={0}
            className="s-BannerVideo-22__Dot"
            data-elementclick="section-slider-main-tab"
            data-elementname="TECHNOLOGY EXPERTS"
          >
            <span className="s-BannerVideo-22__DotTitle">TECHNOLOGY EXPERTS</span>
            <span>03</span>
          </button>
        </li>
        <li className={currentSlide === 3 ? 'slick-active' : ''}>
          <button
            tabIndex={0}
            className="s-BannerVideo-22__Dot"
            data-elementclick="section-slider-main-tab"
            data-elementname="CLOUD ENGINEERS"
          >
            <span className="s-BannerVideo-22__DotTitle">CLOUD ENGINEERS</span>
            <span>04</span>
          </button>
        </li>
      </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};


export default Hero;