import React, { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;

  //   border: 3px solid pink;
`;
const StyledBlurhash = styled(Blurhash)`
  //   border: 3px solid blue;
  z-index: 999 !important;
  position: absolute !important;
  top: 0;
  left: 0;
`;
const OptimizedImage = (props) => {
  const { image } = props;
  console.log(image);
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);
  console.log(!isLoaded);
  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };
  const url = `http://localhost:9000/${image.name}`;
  return (
    <ImageWrapper>
      <LazyLoadImage
        key={image.name}
        src={url}
        height={500}
        width={333}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        alt="hi"
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <StyledBlurhash
          hash={image.blurhash}
          width={333}
          height={500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </ImageWrapper>
  );
};

export default OptimizedImage;
