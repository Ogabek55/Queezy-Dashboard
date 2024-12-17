import React, { useState, useEffect } from "react";

type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "680px",
        height: "908px",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + ""}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 2,
          border: "none",
          background: "transparent",
          padding: "5px",
        }}
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 2,
          border: "none",
          background: "transparent",
          padding: "5px",
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
