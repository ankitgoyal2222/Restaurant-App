import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#9b8282', color:'#f2f2f2',p:1}}>
        {/* Icons */}
        <Box sx={{my:1 ,"& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2
        },
        "& svg:hover":{
            color:'#14425e',
            transform:'translateX(5px)',
            translate:'all 400ms',
        }
        }}>
            <InstagramIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
            {/* <XIcon/> */}

        </Box>
        <Typography variant='h6'        
        sx={{
            "@media(max-width:600px)":{
            fontSize:"1rem",
         },
         }} 
        >
            All rights reserved &copy; Techninfo YT </Typography>
    </Box>
    </>
  )
}

export default Footer
