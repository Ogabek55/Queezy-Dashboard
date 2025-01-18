import React, { useState, useEffect } from "react";
import BacroundImg1 from "./image/bacroundImg1.png";
import BacroundImg2 from "./image/bacroundImg2.png";
import BacroundImg3 from "./image/bacroundImg3.png";
import { Box, Typography, useMediaQuery } from "@mui/material";

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

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index : any) => {
    setCurrentIndex(index);
  };

  const renderDots = () => {
    return slides.map((_, index) => (
      <Box
        key={index}
        onClick={() => handleDotClick(index)}
        sx={{
          width: currentIndex === index ? "12px" : "8px",
          height: currentIndex === index ? "12px" : "8px",
          bgcolor: currentIndex === index ? "#ffffff" : "#888",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      />
    ));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        p: isSmallScreen ? 2 : 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: isSmallScreen ? "100%" : "680px",
          height: isExtraSmallScreen ? "60vh" : isSmallScreen ? "70vh" : "908px",
          bgcolor: "rgba(106, 90, 224, 1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          sx={{
            width: "100%",
            height: "50%",
            objectFit: "contain",
            mt: -5,
          }}
        />
        <Box
          sx={{
            width: "100%",
            fontFamily: "Rubik",
            fontSize: isExtraSmallScreen ? "16px" : isSmallScreen ? "18px" : "20px",
            color: "white",
            p: 2,
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 4,
          }}
        >
          {slides[currentIndex].text.map((line, idx) => (
            <Typography key={idx} variant="body1" component="span">
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: isExtraSmallScreen ? -5 : isSmallScreen ? -7 : -10,
        }}
      >
        {renderDots()}
      </Box>
    </Box>
  );
};

export default App;
