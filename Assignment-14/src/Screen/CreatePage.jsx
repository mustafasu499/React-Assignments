import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const CreatePage = () => {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", createUser)
      .catch((err) => console.log(err));
    navigate("/");
  };
  console.log(createUser);
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5, borderRadius: 5 }}>
        <ArrowCircleLeftIcon
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            backgroundColor: "#1976d2",
            color: "#ffffff",
            width: 50,
            height: 50,
            padding: 1,
            mb: 2,
            borderRadius: 10,
          }}
        />
        <Typography sx={{ marginBottom: 5 }} variant="h4">
          Create User
        </Typography>
        <TextField
          onChange={(e) => {
            setCreateUser({ ...createUser, name: e.target.value });
          }}
          sx={{ mb: 3 }}
          label="Full Name"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setCreateUser({ ...createUser, username: e.target.value });
          }}
          sx={{ mb: 3 }}
          label="User Name"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setCreateUser({ ...createUser, email: e.target.value });
          }}
          sx={{ mb: 3 }}
          label="Email"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setCreateUser({ ...createUser, phone: e.target.value });
          }}
          sx={{ mb: 3 }}
          label="Phone"
          fullWidth
        />
        <Button type="submit" fullWidth variant="contained">
          Submit
        </Button>
      </Paper>
    </form>
  );
};

export default CreatePage;
