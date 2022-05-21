import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styleds from "./checkStatus.module.scss";
import { useSelector } from "react-redux";

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

function createData(name, calories, fat, carbs, service) {
  return { name, calories, fat, carbs, service };
}

const rows = [createData("Apple", "not ready", '19.05.2022', '', '')];

export default function CheckStatus() {

  const phoned = useSelector(state=>state.phoneReducer.phone)
  if(phoned !== []){
      console.log(phoned.option)
  }

  const [searchPhone, setSearchPhone] = useState();
  const [searchPhoneB, setSearchPhoneB] = useState(false);
  const handleChange = (val) => {
    setSearchPhone(val.target.value);
  };
  const handleClick = () => {
    setSearchPhoneB(true)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(postPhone(formData))
  };

  return (
    <div className={styleds.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styleds.restBlock}>
          <input type="text" onChange={handleChange} value={searchPhone} />
          <button onClick={handleClick}>Search</button>
        </div>
      </form>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name phone</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Acceptance date</StyledTableCell>
                <StyledTableCell align="right">Сompletion date</StyledTableCell>
                {(phoned.option === 'Display' || phoned.option === 'Processor') ? <StyledTableCell align="right">Detail</StyledTableCell> : <StyledTableCell align="right">Service</StyledTableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {(searchPhone === "agh123" || searchPhone === "hhg343" || searchPhone === 'uhj569' ) && searchPhoneB
                ? rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                      {phoned !== [] ? phoned.model : ''}
                      </StyledTableCell>
                      <StyledTableCell style={row.calories ==='not ready' ? { color: "red" } : { color: "green" }} align="right" >
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {phoned !== [] ? phoned.option : ''}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
