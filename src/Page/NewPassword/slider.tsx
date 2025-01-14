import React, { useState, useEffect } from "react";
import BacroundImg1 from "./image/bacroundImg1.png";
import BacroundImg2 from "./image/bacroundImg2.png";
import BacroundImg3 from "./image/bacroundImg3.png";


const slides = [
  {
    id: 1,
    image: BacroundImg1,
    text: ["Create gamified quizzes", "becomes simple"],
  },
  {
    id: 2,
    image: BacroundImg2,
    text: ["Find Quizzes to test out", "your knowledge"],
  },
  {
    id: 3,
    image: BacroundImg3,
    text: ["Take part in challenges", "with friends"],
  },
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderDots = () => {
    return slides.map((_, index) => (
      <span
        className="renderDotsClass"
        key={index}
        onClick={() => handleDotClick(index)}
        style={{
          ...styles.dot,
          width: currentIndex === index ? "12px" : "8px",
          height: currentIndex === index ? "12px" : "8px",
          backgroundColor: currentIndex === index ? "#ffffff" : "#888",
          cursor: "pointer",
        }}
      />
    ));
  };

  return (
    <div style={styles.container}>
      <div style={styles.slideContainer}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
        <div style={styles.text}>
          <span style={styles.textLine}>{slides[currentIndex].text[0]}</span>
          <span style={styles.textLine}>{slides[currentIndex].text[1]}</span>
        </div>
      </div>
      <div style={styles.dotsContainer}>{renderDots()}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    color: "#fff",
  },
  slideContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    width: "680px",
    height: "908px",
    backgroundColor: "rgba(106, 90, 224, 1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "contain" as const,
    marginTop: "-40px",
  },
  text: {
    width: "100%",
    fontFamily: "Rubik",
    fontSize: "20px",
    color: "white",
    padding: "10px",
    fontWeight: "500",
    textAlign: "center" as const,
    lineHeight: "28px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "5px",
    marginTop: "40px",
  },
  textLine: {
    display: "block",
  },
  dotsContainer: {
    display: "flex",
    gap: "8px",
    marginTop: "-142px",
  },
  dot: {
    borderRadius: "50%",
    transition: "all 0.3s ease",
  },
};

export default App;
