import {
  ButtonFooter,
  PasswordForgot,
  PasswordForgotInformation,
  SignUp,
} from "./styled";
import Imagequeezy from "./image/image-queezy.png";
import { Container, Typography, TextField } from "@mui/material";
import Facabook from "./image/facebookImg.png";
import GoogleImg from "./image/googleImg.png";
import Button from "@mui/material/Button";
import ContaineriMG1 from "./image/Container1.png";
import ContaineriMG2 from "./image/Container2.png";
import ContaineriMG3 from "./image/Container3.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slider from "./slider";
const images = [ContaineriMG1, ContaineriMG2, ContaineriMG3];

const Login = () => {
  return (
    <>
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
                    }}
                  >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                      <MailOutlineIcon />
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
                <Paper
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 440,
                    height: 56,
                    borderRadius: "20px",
                    margin: "6px 0px 0px 0px",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <LockIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Password"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  ></IconButton>
                </Paper>
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
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Slider images={images} />
              </div>
            </div>
          </div>
        </SignUp>
      </Container>
    </>
  );
};

export default Login;
