import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photos from "./Screens/Photos";
import About from "./Screens/About";
function App() {
  AOS.init();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-img-background"></div>
                <Header />
              </>
            }
          ></Route>

          {/* <div className="fullScreenImg"></div> */}
          {/* <header>The 102 Creative</header> */}
          {/* <Header /> */}
          <Route exact path="/photos" element={<Photos />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      {/* <header class="header1">
        <div class="header1-background"></div>
        <div class="header1-text">
          <h1>Welcome to the Milky Way</h1>
        </div>
      </header>
      <div
        className="gray-back"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: "1s",
        }}
      ></div>
      <main>
        <div
          className="filmWheelAndAboutMe"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={
              "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            className="filmWheelPic"
          />
          <div className="aboutMe">
            <div className="aboutMeHeaderText">About Me</div>
            <div className="aboutMeDescription">
              <div className="aboutMeDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quos excepturi harum veniam sint at.
              </div>
              <div className="aboutMeDescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="aboutMeDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                facilis cum assumenda dignissimos ad ipsa expedita natus nostrum
                aperiam ducimus corporis in deserunt nemo aut rem, eos quae
                porro
              </div>
            </div>
          </div>
        </div>
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
        <div className="blue-back"></div>
        <div className="pink-back"></div>
        <div className="pink-back"></div>
        <div
          className="gray-back"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            transition: "1s",
          }}
        ></div>
        <div className="pink-back"></div>
        <div className="pink-back"></div>
        <div className="pink-back"></div>
        <div>About Us</div>
        <div>
          {" "}
          We are proud to offer email marketing, social messaging, discord
          management,and monthly content creation The creative
        </div>
        <div>
          We are proud to offer email marketing, social media, management,
          discord, community management, twitter management, and monthlyy
          content creation
        </div>
        <div></div>
      </main>
      <div className="oswald">helo this should be oswald text</div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
