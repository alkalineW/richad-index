import React, { useState, useEffect } from "react";

const ImageGallery = ({ gallery }) => {
  const [images, setImages] = useState([]);

  console.log(gallery);

  useEffect(() => {
    const loadImages = () => {
      try {
        const galleryImages = gallery.map((eachImgUrl) => {
          return <img src={require("" + eachImgUrl)} alt={eachImgUrl} />;
        });
        console.log(galleryImages);
        setImages(galleryImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [gallery]);

  return <div>{images}</div>;
};

export default ImageGallery;
