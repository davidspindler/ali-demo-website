import React, { useState, useEffect } from "react";
import "./Masonry.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OptimizedImage from "./optimizedImage";
import styled from "styled-components";
import { Blurhash } from "react-blurhash";

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 5px;
  max-width: 1024px;
  content-visibility: visible;
  //   border: 5px solid black;
`;

export default function Masonry(props) {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    const images = await fetch("http://localhost:9000/images");

    setImages((await images.json()).images);
    console.log("Images: ", await images.json());
  };

  useEffect(() => {
    fetchImages();
  }, []);
  console.log(`Images will go here ${images}`);
  return (
    <ImagesContainer>
      {images.map((image) => (
        <OptimizedImage key={image.name} image={image} />
      ))}
    </ImagesContainer>
  );
}
