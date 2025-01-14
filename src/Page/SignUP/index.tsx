import React  from "react";
import {
  ButtonFooter,
  BUttonWithGoogle,
  PasswordForgot,
  PasswordForgotInformation,
  SignUp,
} from "./styled";
import Imagequeezy from "./image/image-queezy.png";
import { Container, Typography, Link } from "@mui/material";
import Facabook from "./image/facebookImg.png";
import GoogleImg from "./image/googleImg.png";
import Button from "@mui/material/Button";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/sign-up-with-email");
  };

  return (
    <Container maxWidth="xl">
      <SignUp>
        <div className="login_page">
          <div className="login_page_form">
            <div style={{ marginTop: "80px" }} className="login_page_form_header">
              <img src={Imagequeezy} alt="This is img quezzy" />
              <Typography sx={{ color: "rgba(12, 9, 42, 1)", fontWeight: "bold" }}>
                Queezy
              </Typography>
            </div>
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", fontWeight: "bold" }}
            >
              Sign Up
            </Typography>
            <Typography variant="h5">
              Already have an account?{" "}
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  color: "#6A5AE0",
                }}
              >
                Login
              </Link>
            </Typography>
            <BUttonWithGoogle>
              <div className="login_page_form_buttons">
                <Button
                  variant="contained"
                  disableElevation
                  className="firthbutton"
                  style={{ marginBottom: "16px" }}
                >
                  <img src={GoogleImg} alt="" /> Login with Google
                </Button>
                <Button variant="contained" disableElevation className="secondbutton">
                  <img src={Facabook} alt="" /> Login with Facebook
                </Button>
              </div>
            </BUttonWithGoogle>
            <div className="separator">
              <span>OR</span>
            </div>
            <div>
              <ButtonFooter>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleResetPassword}
                  sx={{ gap: "19px" }}
                >
                  <MarkunreadOutlinedIcon /> Sign Up with email{" "}
                  <MarkunreadOutlinedIcon />
                </Button>
              </ButtonFooter>
              <PasswordForgot>
                <Typography variant="h4">
                  Already have an account?
                  <span> Login</span>
                </Typography>
              </PasswordForgot>
              <PasswordForgotInformation>
                <Typography className="text_footer">
                  By continuing, you agree to the{" "}
                  <span className="text_footer_span">Terms of <br /> Services</span> &{" "}
                  <span className="text_footer_span">Privacy Policy.</span>
                </Typography>
              </PasswordForgotInformation>
            </div>
          </div>
        </div>
        <Slider />
      </SignUp>
    </Container>
  );
};

export default Login;
