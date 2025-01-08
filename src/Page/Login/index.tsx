import React, { useState } from "react";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event : any) => event.preventDefault();
  const navigate = useNavigate();

  const handleLogin = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
  
    }
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
            <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
              Login in to Queezy
            </Typography>
            <Typography variant="h5">
              Don’t have an account?{" "}
              <Link href="#"  sx={{ textDecoration: "none", fontSize:"16px", lineHeight:"24px",fontWeight:"500", color: "#6A5AE0" }}>
                Register
              </Link>
            </Typography>
            <BUttonWithGoogle>
              <div className="login_page_form_buttons">
                <Button variant="contained" disableElevation className="firthbutton" style={{ marginBottom: "16px" }}>
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
                  <MailOutlineIcon sx={{ color: "rgba(106, 90, 224, 1)" }} />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Email Address"
                  inputProps={{ "aria-label": "Email Address" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Paper>
              {emailError && (
                <Typography sx={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                  {emailError}
                </Typography>
              )}
              <Typography className="form_email">Password</Typography>
              <FormControl
                sx={{
                  margin: "6px 0px 0px 0px",
                  width: "440px",
                  height: "56px",
                  borderRadius: "20px",
                  background: "white",
                  border: "none",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton edge="start" disableRipple>
                        <LockIcon sx={{ color: "rgba(106, 90, 224, 1)" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "hide the password" : "display the password"}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
              {passwordError && (
                <Typography sx={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                  {passwordError}
                </Typography>
              )}
              <ButtonFooter>
                <Button variant="contained" disableElevation onClick={handleLogin}>
                  Login
                </Button>
              </ButtonFooter>
              <PasswordForgot>
                <Typography
                  sx={{ cursor: "pointer", textDecoration: "none", color: "blue" }}
                  onClick={() => navigate("/forgot-password")}
                  variant="h5"
                >
                  Forgot password?
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
