import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:4,ml:5,mr:2,"& h4":{fontWeight:"bold",mb:2},
    }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus officia, inventore enim fugiat mollitia quod, repellendus vel ea provident voluptates ullam. Numquam voluptatibus neque veritatis ipsam perspiciatis corporis vero quis?</p>
        <br />
        <p style={{ color: "black", fontWeight: "bold" ,fontStyle:"italic"}}> 🕘 Our -Timings </p>
        <br />
          <p style={{ color: "red" }}>Mon–Sun : 09:00 AM – 11:30 PM</p>
      </Box>
      <Box sx={{m:3,width:"500px",ml:5,"@media(max-width:600px)":{
        width:"300px",
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:"black",color:"white"}}
                align='center'>🔎  Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red",pt:1,}}/> 1800-00-0000 (Toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color:"skyblue",pt:1,}}/>agrawalsrestaurant.mtr@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:"green",pt:1,}}/>+91-8246654379
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </Layout>
  )
}

export default Contact
