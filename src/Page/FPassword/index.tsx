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

const Fpassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email.trim()) {
      setErrorMessage("Email address is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      navigate("/new-password");
    }
  };

  return (
    <Container maxWidth="xl">
      <SignUp>
        <div className="login_page">
          <div className="login_page_form">
            <div
              style={{ marginTop: "80px" }}
              className="login_page_form_header"
            >
              <img src={Imagequeezy} alt="Queezy Logo" />
              <Typography
                sx={{ color: "rgba(12, 9, 42, 1)", fontWeight: "bold" }}
              >
                Queezy
              </Typography>
            </div>
            <Typography variant="h4">Reset Password</Typography>
            <Typography variant="h5">
              Enter your email and we will send you a link to reset <br /> your
              password.
            </Typography>

            <div>
              <Typography className="form_email">Email Address</Typography>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 56,
                  borderRadius: "20px",
                  margin: "6px 0px 0px 0px",
                  boxShadow: "0",
                  border: "2px solid #6A5AE0",
                  
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
                  placeholder="Email Address"
                  inputProps={{ "aria-label": "Email Address" }}
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
                  Reset Password
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
