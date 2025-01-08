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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Slider from "./slider";
import { LinearProgress, Box } from "@mui/material";

const Fpassword = () => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(100);


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
            <Typography variant="h4">Create a username</Typography>
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
                {`3 of 3`} 
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
              <Typography className="form_email">Username</Typography>
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
                <IconButton sx={{ p: "10px" }} aria-label="Username">
                  <PersonOutlineIcon
                    sx={{
                      color: "rgba(106, 90, 224, 1)",
                    }}
                  />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your username"
                  inputProps={{ "aria-label": "Your username" }}
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
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
               
                >
                  Complete Account
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
