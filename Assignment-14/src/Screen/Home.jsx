import React, { useEffect, useState } from "react";
import Tables from "./Table";
import axios from "axios";
import { Box } from "@mui/material";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box sx={{ margin: 1 }}>
      <Tables data={apiData} />
    </Box>
  );
};

export default Home;
