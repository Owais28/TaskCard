import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { MobileContainer } from "../components/Container/MobileContainer";
import { useNavigate } from "react-router-dom";

export default function Error(props) {
  let navigate = useNavigate();
  return (
    <MobileContainer>
      <Container
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <box>
          <box>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              sx={{ mt: "15px" }}
              variant="contained"
              onClick={(e) => navigate("/")}
            >
              Back Home
            </Button>
          </box>
          <box>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={300}
              height={250}
            />
          </box>
        </box>
      </Container>
    </MobileContainer>
  );
}
