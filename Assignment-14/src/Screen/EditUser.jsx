import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";

const EditUser = () => {
  const [EditUser, setEditUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setEditUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form>
      <Paper elevation={24} sx={{ margin: 20, padding: 5, borderRadius: 5 }}>
        <Typography sx={{ marginBottom: 5 }} variant="h4">
          Edit User
        </Typography>
        <TextField
          onChange={(e) => {
            setEditUser({ ...EditUser, name: e.target.value });
          }}
          name="name"
          value={EditUser.name}
          sx={{ mb: 3 }}
          label="Full Name"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setEditUser({ ...EditUser, username: e.target.value });
          }}
          name="username"
          value={EditUser.username}
          sx={{ mb: 3 }}
          label="User Name"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setEditUser({ ...EditUser, email: e.target.value });
          }}
          name="email"
          value={EditUser.email}
          sx={{ mb: 3 }}
          label="Email"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setEditUser({ ...EditUser, phone: e.target.value });
          }}
          name="phone"
          value={EditUser.phone}
          sx={{ mb: 3 }}
          label="Phone"
          fullWidth
        />
        <Button fullWidth variant="contained">
          Submit
        </Button>
      </Paper>
    </form>
  );
};

export default EditUser;
