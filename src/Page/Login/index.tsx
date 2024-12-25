import {
  BgImg,
  ButtonFooter,
  BUttonWithGoogle,
  PasswordForgot,
  PasswordForgotInformation,
  SignUp,
} from "./styled";
import React from "react";
import Imagequeezy from "./image/image-queezy.png";
import { Container, Typography, TextField } from "@mui/material";
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
import NBacroundImg from "./image/NBacroundImg.png";
import NBacroundImg2 from "./image/NBacroundImg2.png";
import NBacroundImg3 from "./image/NBacroundImg3.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Slider from "./slider";


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
      <Container maxWidth="xl">
        <SignUp>
          {" "}
          <div className="login_page">
            <div className="login_page_form">
              <div
                style={{ marginTop: "80px" }}
                className="login_page_form_header"
              >
                <img src={Imagequeezy} alt="This is img quezzy" />
                <Typography
                  sx={{ color: "rgba(12, 9, 42, 1)", fontWeight: "bold" }}
                >
                  Queezy
                </Typography>
              </div>
              <Typography variant="h4">Login in to Quiezzy</Typography>
              <Typography variant="h5">
               Don’t have account?{" "}
                <a style={{ textDecoration: "none" }} href="#">
                  Register
                </a>
              </Typography>
              <BUttonWithGoogle>
                {" "}
                <div className="login_page_form_buttons">
                  <Button
                    variant="contained"
                    disableElevation
                    className="firthbutton"
                    style={{ marginBottom: "16px" }}
                  >
                    <img src={GoogleImg} alt="" /> Login with Google
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    className="secondbutton"
                  >
                    <img src={Facabook} alt="" /> Login with Facebook
                  </Button>
                </div>
              </BUttonWithGoogle>
              <div className="separator">
                <span>OR</span>
              </div>
              <div>
                <Typography className="form_email"> Email Address</Typography>
                <>
                  <Paper
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: 440,
                      height: 56,
                      borderRadius: "20px",
                      margin: "6px 0px 0px 0px",
                      boxShadow:"0"
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
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    ></IconButton>

                    <IconButton
                      color="primary"
                      sx={{ p: "10px" }}
                      aria-label="directions"
                    ></IconButton>
                  </Paper>
                </>
                <Typography className="form_email">Password</Typography>
                <FormControl
                  sx={{
                    margin: "6px 0px 0px 0px",
                    width: "440px",
                    height: "56px",
                    borderRadius: "20px",
                    background: "white",
                    border: "none",
                                                                   
                    "& .MuiOutlinedInput-root": {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton edge="start" disableRipple>
                          <LockIcon
                            sx={{
                              color: "rgba(106, 90, 224, 1)",
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <ButtonFooter>
                  <Button
                    className="ButtonFooter"
                    variant="contained"
                    disableElevation
                  >
                    Login
                  </Button>
                </ButtonFooter>
                <PasswordForgot>
                  <Typography variant="h5">Forgor password?</Typography>{" "}
                </PasswordForgot>
                <PasswordForgotInformation>
                  <Typography className="text_footer">
                    By continuing, you agree to the
                    <span className="text_footer_span">
                      Terms of <br /> Services
                    </span>{" "}
                    &<span className="text_footer_span">Privacy Policy.</span>
                  </Typography>{" "}
                </PasswordForgotInformation>
              </div>
            </div>
            <div className="login_form_container_img">
              <BgImg>
               <img className="bgImg2" src={NBacroundImg} alt="" />
                <img className="bgImg2_2" src={NBacroundImg2} alt="" />
                <img className="bgImg2_3" src={NBacroundImg3} alt="" />
              </BgImg>
            </div>
          </div>
              <Slider />
        </SignUp>
      </Container>
  );
};

export default Login;
