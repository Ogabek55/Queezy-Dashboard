import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import { ButtonFooter, SignUp } from "./styled";
import Imagequeezy from "./image/image-queezy.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";
import { LinearProgress, Box } from "@mui/material";

const Fpassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(33);

  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email.trim()) {
      setErrorMessage("Email address is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      navigate("/sign-up-with-password");
    }
  };

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
            <Typography variant="h4">What’s your email</Typography>
            <Typography variant="h5">
              Fill in all the data and proceed to the next step
            </Typography>

          
            <Box sx={{ width: '100%', position: 'relative', marginTop: '24px' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: -25,
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#6A5AE0',
                }}
              >
                {` ${Math.ceil(progress / 33)} of 3`}
              </Typography>
              <LinearProgress
             
                variant="determinate"
                value={progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#6A5AE0',
                  },
                }}
              />
            </Box>

            <div>
              <Typography className="form_email">Email Address</Typography>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: 440,
                  height: 56,
                  borderRadius: "20px",
                  margin: "6px 0px 0px 0px",
                  boxShadow: "0",
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="Email">
                  <MailOutlineIcon
                    sx={{
                      color: "rgba(106, 90, 224, 1)",
                    }}
                  />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your email adress"
                  inputProps={{ "aria-label": "Your email adress" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Paper>

              {errorMessage && (
                <Typography
                  sx={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "8px",
                    lineHeight: "19.6px",
                  }}
                >
                  {errorMessage}
                </Typography>
              )}

              <ButtonFooter>
                <Button
                  className="ButtonFooter"
                  variant="contained"
                  disableElevation
                  onClick={handleResetPassword}
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
