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
        src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="beautiful mountians over lake with clouds pink"
      />
      <header>The 102 Creative</header>

      <main>
        <div
          className="gray-back"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            transition: "1s",
          }}
        ></div>
        <div>Services</div>
        <div className="blue-back"></div>
        <div className="pink-back"></div>
        <div className="pink-back"></div>
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
    </div>
  );
}

export default App;
