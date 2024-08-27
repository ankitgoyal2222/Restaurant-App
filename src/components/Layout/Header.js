import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
// import { useState } from 'react';
function Header() {
  const[mobileOpen,setMobileOpen]= useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
};
  // menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
          <Typography 
                  color={"#d37627"} 
                  variant="h6" 
                  component={'div'}
                  sx={{flexGrow:1 , my:2}}>

          <NavLink to={'/'}><img src={Logo} alt="logo" height={"70"} width="200" /></NavLink> 
            </Typography>
            <Divider/>
                  <ul className='mobile-navigation'>
                    <li>
                      <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                    </li>
                     
                    <li>
                      <NavLink to={'/menu'}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                  </ul>            
    </Box>
  )
  return (
    <>
      <Box>
        {/* Box is used as a container .The Box component you can think of it as a <div> with extra built-in features, like access to your app's theme and the sx prop*/}
         <AppBar component={'nav'} sx={{bgcolor:'black'}}>

          {/* through appbar we create responsive navigation menu .The App Bar displays information and actions relating to the current screen.*/}

          <Toolbar>
            {/* Toolbar is used for size */}
            <IconButton 
            color='inherit' 
            area-label="open drawer" 
            edge="start"
            sx={{
               mr:2,
               display: {sm:"none"}
              }}
              onClick={handleDrawerToggle}
              >
                
                <MenuIcon/>
            </IconButton>
            <Typography 
                  color={"#d37627"} 
                  variant="h6" 
                  component={'div'}
                  sx={{flexGrow:1}}>

              <NavLink to={'/'}><img src={Logo} alt="logo" height={"70"} width="250"/></NavLink>
            </Typography>

              <Box sx={{display:{xs:"none" ,sm: "block"}}}>
                  <ul className='navigation-menu'>
                    <li>
                      <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                    </li>                     
                    <li>
                      <NavLink to={'/menu'}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                  </ul>
              </Box>

          </Toolbar>
          
         </AppBar>
         <Box component={"nav"}>
          <Drawer variant="temporary" 
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  sx={{display:{xs:"block" ,sm: "none"},
                  "& .MuiDrawer-paper":{
                        boxSizing:'border-box',
                        width:'240px'
                  },
                  }}>

               {drawer}
          </Drawer>
         </Box>
                <Box >
                  <Toolbar/>
                </Box>
             
      </Box>
    </>
  )
}

export default Header
