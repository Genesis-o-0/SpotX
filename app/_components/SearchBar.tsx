"use client";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  // Is there any search functionality required?
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <Container
      style={{
        margin: "auto",
        backgroundColor: "#3a3e47",
        padding: "15px",
        marginTop: "20px",
        width: "90%",
        borderRadius: "15px",
      }}
    >
      <h2 style={{ color: "white", fontSize: "1.5rem" }}>Discover & book</h2>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "80%",
          "@media (min-width:600px)": {
            width: "50%",
          },
          "@media (min-width:960px)": {
            width: "50%",
          },
        }}
        style={{ borderRadius: "30px", width: "95%" }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Location, Country..."
          inputProps={{ "aria-label": "Location, Country..." }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
    </Container>
  );
};

export default SearchBar;
