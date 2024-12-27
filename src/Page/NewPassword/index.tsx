import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ButtonFooter, SignUp } from "./styled";
import Imagequeezy from "./image/image-queezy.png";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = () => {
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");
      console.log("Password reset successful!");
      navigate("/next-page"); // Keyingi sahifaga o'tish
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
            <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
              New Password
            </Typography>
            <Typography variant="h5">
              Enter your email and we will send you a link to reset <br /> your password.
            </Typography>

            <div>
              <Typography className="form_password">Password</Typography>
              <FormControl
                sx={{
                  margin: "6px 0px 0px 0px",
                  width: "440px",
                  borderRadius: "20px",
                  background: "white",
                }}
                variant="outlined"
              >
                <OutlinedInput
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
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
                />
              </FormControl>

              {errorMessage && (
                <Typography className="form_error" sx={{ color: "red", marginTop: "8px" }}>
                  {errorMessage}
                </Typography>
              )}

              <Typography className="form_password">Confirm Password</Typography>
              <FormControl
                sx={{
                  margin: "6px 0px 0px 0px",
                  width: "440px",
                  borderRadius: "20px",
                  background: "white",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
                />
              </FormControl>

              <ButtonFooter>
                <Button variant="contained" onClick={handleLogin} sx={{ marginTop: "20px" }}>
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

export default ResetPassword;
