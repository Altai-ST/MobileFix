import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styleds from '../../repairLsit/repairList.module.scss'


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
  
  function createData(name, calories, fat, carbs,cost, number) {
    return { name, calories, fat, carbs,cost, number };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1),
  ];

export default function WorkerSmallestsOrder() {
    const [phoneList, setPhoneList] = useState();
    const handleChange = (val) => {
        setPhoneList(val.target.value);
    };
  return (
    <div className={styleds.container}>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name component</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Acceptance date</StyledTableCell>
                <StyledTableCell align="right">–°ompletion date</StyledTableCell>
                <StyledTableCell align="right">
                  Cost
                </StyledTableCell>
                 <StyledTableCell align="right">Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.cost}</StyledTableCell>
                  <StyledTableCell align="right">{row.number}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}