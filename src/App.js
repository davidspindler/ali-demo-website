import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <img
        className="fullscreenImg"
        src="https://images.unsplash.com/photo-1576225410873-a28b2a79fd93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="beautiful mountians over lake with clouds pink"
      />
      {/* <header>The 102 Creative</header> */}
      <div
        className="gray-back"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: "1s",
        }}
      ></div>
      <main>
        <div className="filmWheelAndAboutMe">
          <img src={"/filmwheel.png"} alt="" className="filmWheelPic" />
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

        <div className="blue-back"></div>
        <div
          className="alternate-gray-back"
          style={{
            transform: `translateY(${offsetY * 0.15}px)`,
            transition: "1s",
          }}
        ></div>
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
      <div className="oswald">helo this should be oswald text</div>
    </div>
  );
}

export default App;
