import { Button, LinearProgress, linearProgressClasses } from "@mui/material";
import { grid, styled } from "@mui/system";

export const WrapperPokemonPage = styled("div")({
  display: "grid",
  justifyItems: "center",
  marginTop: "5rem;",
});

export const PokeCard = styled("div")({
  backgroundColor: "#DBD6CE",
  borderRadius: "100px",
  maxWidth: "400px",
  minWidth: "200px",
  width: "50%",

  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "4rem 4rem 0rem 4rem ",
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

export const Descriptions = styled("div")({
  display: "grid",
  width: "50%",
  minWidth: "200px",
});

export const PokemonText = styled("span")({
  textTransform: "capitalize",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: "0.5rem",
});

export const AddFavButton = styled(Button)({
  color: "#000B",
  border: "none",
  height: "50px",
  padding: "1rem",
  margin: "auto",

  ":hover": {
    color: "green",
    border: "1px solid green",
    backgroundColor: "none",
  },
});

export const BackToHome = styled("a")({
  textDecoration: "none",
  marginTop: "4rem",
});

export const BackToHomeButton = styled(Button)({
  margin: "1rem 0 1rem 0",

  ":hover": {
    color: "purple",
  },
});

export const PokemonStats = styled("div")({
  display: "grid",
  minWidth: "200px",
  width: "50%",
});

export const Progress = styled(LinearProgress)({
  width: "70%",
  marginRight: "1rem",
  backgroundColor: "purple",

  [` & .${linearProgressClasses.bar}`]: {
    backgroundColor: "yellow",
    opacity: "50%",
  },
});

export const StatName = styled("strong")({
  width: "100%",
});

export const Pokemon = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});
