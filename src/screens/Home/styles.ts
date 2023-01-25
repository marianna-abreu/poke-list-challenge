import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HomeWrapper = styled("div")({
  display: "grid",
  margin: "2rem 3rem 0 3rem",
});

export const GoToFavsButton = styled(Button)({
  margin: "1rem 0 1rem 0",

  ":hover": {
    color: "purple",
  },
});

export const GoToFavs = styled("a")({
  display: "flex",
  justifyContent: "flex-start",
  textDecoration: "none",
});

export const Animation = styled("div")({
  margin: "auto",
  paddingLeft: "50px",
  "@keyframes pulsate": {
    from: {
      opacity: 1,
      transform: "scale(1)",
    },
    to: {
      opacity: 1,
      transform: "scale(1.5)",
    },
  },
  animation: "pulsate 5s forwards ease",
});

export const Logo = styled("img")({
  minWidth: "300px",
  maxWidth: "400px",
  width: "50%",
  margin: "auto",
});
