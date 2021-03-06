import React, { useDebugValue, useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styleds from '../../repairLsit/repairList.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhone } from '../../../store/reducers/phoneSlice';


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
  
  function createData(name, calories, fat, carbs,cost, service) {
    return { name, calories, fat, carbs,cost, service };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 'fix display'),
  ];

export default function WorkerRepairList() {

  const phones = useSelector(state=> state.phoneReducer.phone)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPhone());
  },[dispatch])

  // if(phones !== []){
  //   const newPhone = phones.filter(el => el.option === 'To fix the display' || el.option === 'To fix keyboard'
  //    || el.option === 'To fix the insides' || el.status === true)
  // }

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
                <StyledTableCell>Name phone</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Acceptance date</StyledTableCell>
                <StyledTableCell align="right">??ompletion date</StyledTableCell>
                <StyledTableCell align="right">
                  Cost
                </StyledTableCell>
                <StyledTableCell align="right">Service</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {phones.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.address.street}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.website}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}