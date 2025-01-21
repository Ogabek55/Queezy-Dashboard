import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import { ButtonFooter, SignUp } from "./styled";
import Imagequeezy from "./image/image-queezy.png";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const Fpassword = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [progress] = useState(66);

  const navigate = useNavigate();

  
  const validatePassword = (password : any) => {
    if (!password.trim()) {
      return "Password is required.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters.";
    }
    return "";
  };

  const handlePasswordChange = (e : any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const error = validatePassword(newPassword);
    setErrorMessage(error);
  };

  const handleResetPassword = () => {
    const error = validatePassword(password);
    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage("");
      navigate("/sign-up-with-username");
    }
  };

  const isPasswordValid = !errorMessage;

  return (
    <Container maxWidth="xl">
      <SignUp>
        <div className="login_page">
          <div className="login_page_form">
            <div style={{ marginTop: "80px" }} className="login_page_form_header">
              <img src={Imagequeezy} alt="Queezy Logo" />
              <Typography sx={{ color: "rgba(12, 9, 42, 1)", fontWeight: "bold" }}>
                Queezy
              </Typography>
            </div>
            <Typography variant="h4">What’s your password</Typography>
            <Typography variant="h5">
              Fill in all the data and proceed to the next step
            </Typography>

            <Box sx={{ width: "100%", position: "relative", marginTop: "24px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  position: "absolute",
                  right: 0,
                  top: -25,
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#6A5AE0",
                }}
              >
                {`2 of 3`}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#6A5AE0",
                  },
                }}
              />
            </Box>

            <div>
              <Typography className="form_email">Password</Typography>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 56,
                  borderRadius: "20px",
                  margin: "6px 0px 0px 0px",
                  boxShadow: "0",
                  border: "2px solid #6A5AE0",
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="Password">
                  <HttpsOutlinedIcon
                    sx={{
                      color: "rgba(106, 90, 224, 1)",
                    }}
                  />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your password"
                  inputProps={{ "aria-label": "Your password" }}
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Paper>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: errorMessage ? "red" : "green",
                    fontSize: "14px",
                    lineHeight: "19.6px",
                  }}
                >
                  {errorMessage || "Must be at least 8 characters."}
                </Typography>
                <IconButton sx={{ p: "0px", marginLeft: "8px" }}>
                  {isPasswordValid ? (
                    <CheckIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  )}
                </IconButton>
              </Box>

              <ButtonFooter>
                <Button
                  className="ButtonFooter"
                  variant="contained"
                  disableElevation
                  onClick={handleResetPassword}
                  disabled={!isPasswordValid}
                >
                  Next Step
                </Button>
              </ButtonFooter>
            </div>
          </div>
        </div>
        <Slider />
      </SignUp>
    </Container>
  );
};

export default Fpassword;
