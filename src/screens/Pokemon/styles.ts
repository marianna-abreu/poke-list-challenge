import { Button } from "@mui/material";
import { grid, styled } from "@mui/system";

export const WrapperPokemonPage = styled("div")({
  display: "grid",
  justifyItems: "center",
  marginTop: "5rem;",
});

export const PokeCard = styled("div")({
  backgroundColor: "#DBD6CE",
  border: "1px",
  borderRadius: "100px",
  maxWidth: "400px",
  minWidth: "200px",
  width: "50%",
  minHeight: "100px",
  maxHeight: "600px",
  height: "100%",
  display: "grid",
  justifyItems: "center",
  padding: "4rem",
});

export const PokemonImage = styled("img")({
  width: "50%",
  minWidth: "100px",
  maxWidth: "200px",
  height: "200px",
  border: "1px ",
  boxShadow: "10px 10px 15px 15px #CFCAC2",

  borderRadius: "50px",
  padding: "2rem",
});

export const Descriptions = styled("div")({});

export const PokemonDetails = styled("span")({
  justifyItems: "flex-start",
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
