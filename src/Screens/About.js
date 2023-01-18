import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./About.css";
const About = () => {
  AOS.init();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div>
        <div className="outsideGrayDiv">
          <div
            className="gray-back"
            style={{
              transform: `translateY(${offsetY * 0.15}px)`,
              transition: "1s",
            }}
          ></div>
        </div>
        <main>
          <div className="filmWheelAndAboutMe">
            <img
              src={
                "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              className="filmWheelPic"
            />
            <div className="aboutMe">
              <div className="aboutMeHeaderText">About Me</div>
              <div className="aboutMeDescription">
                <div className="aboutMeDescription">
                  My Name is Ali Mohamed and I have been working on making
                  beautiful picturesfor over 7 years now.
                </div>
                <div className="aboutMeDescription">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="aboutMeDescription">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore facilis cum assumenda dignissimos ad ipsa expedita
                  natus nostrum aperiam ducimus corporis in deserunt nemo aut
                  rem, eos quae porro
                </div>
                <Link to="/photos" className="linkToWork">
                  View my work
                </Link>
              </div>

              <div
                className="alternate-gray-back"
                style={{
                  transform: `translateY(${offsetY * 0.15}px)`,
                  transition: "1s",
                }}
              ></div>
            </div>
          </div>
          {/* <div
            className="alternate-gray-back"
            style={{
              transform: `translateY(${offsetY * 0.15}px)`,
              transition: "1s",
            }}
          ></div> */}
          <div className="outsideGrayDiv">
            <div
              className="alternate-gray-back"
              style={{
                transform: `translateY(${offsetY * 0.15}px)`,
                transition: "1s",
              }}
            ></div>
          </div>
          <img
            className="secondImage"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </main>
      </div>
    </>
  );
};

export default About;
