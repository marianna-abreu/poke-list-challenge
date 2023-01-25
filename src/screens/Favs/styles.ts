import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "@fontsource/roboto/400.css";

export const FavsPageWrapper = styled("div")({
  margin: "3rem",
});

export const DisplayList = styled("div")({
  display: "grid",
  gridGap: "3rem",
  rowGap: "2rem",
  marginTop: "1rem",

  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
});

export const CardPokemon = styled("div")({
  backgroundColor: "#DBD6CE",
  width: "100%",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0 10px",
  ":hover": {
    boxShadow: "5px 10px 10px #CFCAC2",
  },
});

export const PokemonImage = styled("img")({
  width: "100px",
  height: "100px",
});

export const PokemonName = styled(Typography)({
  fontSize: "1.5rem;",
  textTransform: "capitalize",
});

export const TitlePage = styled("h1")({
  fontFamily: "roboto, sans-serif",
  margin: "0",
});

export const RemoveButton = styled(Button)({
  color: "#000B",
  border: "none",
  ":hover": {
    color: "red",
    border: "1px solid red",
    backgroundColor: "none",
  },
});

export const Link = styled("a")({
  textDecoration: "none",
  color: "#000B",
});

export const BackToHome = styled("a")({
  textDecoration: "none",
  marginTop: "10rem",
});

export const BackToHomeButton = styled(Button)({
  margin: "1rem 0 1rem 0",

  ":hover": {
    color: "purple",
  },
});
