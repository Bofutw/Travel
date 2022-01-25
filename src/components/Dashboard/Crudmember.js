import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState,useEffect} from 'react'


/* function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */




export default function BasicTable() {
  let rows = [];
  let rows2 = [];
  const url = 'http://localhost:8080/member/'
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  
/*   async function fetchapi(){
    try {
     const res = await axios({
      method: 'get',
      url: url
    });
    setData1(res.data);
    } catch (error) {
        console.log(error);
    }
  } */
  
  function fetch2(){
    fetch("http://localhost:8080/member/")
    .then((res) => {
      setData2(res.data);
       /* return res.json(); */
    }).then(() => {
      console.log(data2);
    
    })
  }
  
  useEffect(() => {
    
    
    async function fetchapi(){
      try {
       const res = await (await axios.get(url)).data;
       /* console.log(res);
       console.log(res2); */
      setData1(res);
      } catch (error) {
          console.log(error);
      }
    }
    fetchapi();
    fetch2();
    console.log(data1);
  
  }, [])

  useEffect(() => {
    console.log(data1);
    data1.map((yo,index)=>{
      rows[index] = {id:yo.memberid, name:yo.membername, gender:yo.membergender,birth:yo.memberbirth,time:yo.memberregistertime}
    })
    console.log(rows);
  }, [data1])



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row[0].id}</TableCell>
              <TableCell align="right">{row[0].id}</TableCell>
              <TableCell align="right">{row[0].id}</TableCell>
              <TableCell align="right">{row[0].id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}