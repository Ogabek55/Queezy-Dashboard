import React from "react";
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
import { useNavigate } from "react-router-dom"; // useNavigate import qilish

const Fpassword = () => {
  const navigate = useNavigate(); // useNavigate hookini chaqirish

  const handleResetPassword = () => {
    navigate("/new-password"); // Yangi sahifaga yo'naltirish
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
                  placeholder="Email Address"
                  inputProps={{ "aria-label": "Email Address" }}
                />
              </Paper>

              <ButtonFooter>
                <Button
                  className="ButtonFooter"
                  variant="contained"
                  disableElevation
                  onClick={handleResetPassword} // Tugmani bosganda funksiyani chaqirish
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
