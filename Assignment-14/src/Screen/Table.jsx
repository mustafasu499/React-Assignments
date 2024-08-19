import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables({ data }) {
  const navigate = useNavigate();

  const handleDeletUser = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Button
        onClick={() => {
          navigate("/create");
        }}
        sx={{ margin: 3, float: "right" }}
        variant="contained"
      >
        Create Data
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>

              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {e.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {e.name}
                </StyledTableCell>
                <StyledTableCell align="right">{e.username}</StyledTableCell>
                <StyledTableCell align="right">{e.email}</StyledTableCell>
                <StyledTableCell align="right">{e.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    onClick={() => handleDeletUser(e.id)}
                    sx={{ color: "red", marginRight: 3, cursor: "pointer" }}
                  />
                  <EditIcon
                    onClick={() => navigate(`/edituser/${e.id}`)}
                    sx={{ color: "blue", cursor: "pointer" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
