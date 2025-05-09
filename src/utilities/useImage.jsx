import { useState } from "react";
import React from "react";

function useImage({ src, alt = "", loaderClassName = "" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageElement = (
    <>
      {!imageLoaded && <div className={loaderClassName}></div>}
      <img
        src={src}
        alt={alt}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
    </>
  );

  return imageElement;
}

export { useImage };
