import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HomeWrapper = styled("div")({
  display: "grid",
  margin: "3rem",
  marginBottom: "0",
});

export const FavButton = styled(Button)({
  margin: "1rem 0 1rem 0",
});

export const Link = styled("a")({
  display: "flex",
  justifyContent: "flex-start",
  width: "150px",
});

export const Title = styled(Typography)({
  fontSize: "3rem;",
});

export const Logo = styled("img")({
  width: "500px",
});
