import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import Masonry from "../Masonry.js";
import "./Photos.scss";
import { Link } from "react-router-dom";
const Photos = () => {
  AOS.init();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const imageUrls = [
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://source.unsplash.com/5VXH4RG88gc",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://source.unsplash.com/5VXH4RG88gc",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://source.unsplash.com/5VXH4RG88gc",
    "https://images.pexels.com/photos/15045098/pexels-photo-15045098.jpeg",
    "https://images.pexels.com/photos/14495751/pexels-photo-14495751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14959637/pexels-photo-14959637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <nav>
        <div>
          <div>
            <div>
              <p id="highlight">Ali Mohamed</p>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/" id="highlight">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" id="highlight">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Masonry imageUrls={imageUrls} columnCount="3" gap="8"></Masonry>
      </div>
    </div>
  );
};

export default Photos;
