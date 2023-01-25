import { Pagination, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({});

export const DisplayList = styled("div")({
  display: "grid",
  gridGap: "3rem",
  rowGap: "2rem",
  marginTop: "1rem",

  gridTemplateColumns: "repeat( auto-fill, minmax(200px, 1fr) )",
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
  cursor: "pointer",
  ":hover": {
    boxShadow: "5px 10px 10px #CFCAC2",
    animation: "scale-up-center 0.4s",
  },
});

export const Link = styled("a")({
  textDecoration: "none",
  color: "#000B",
});

export const PokemonImage = styled("img")({
  width: "100px",
  height: "100px",
});

export const PokemonName = styled(Typography)({
  fontSize: "1.5rem",
  textTransform: "capitalize",
});

export const CountPages = styled(Pagination)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
});
