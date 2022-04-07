import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import theme from '../helper/temaConfig';
import { ThemeProvider } from '@mui/styles';


export const MatriculateAppBar = ({drawerWidth, handleDrawerToggle, mobileOpen, setMobileOpen}) => {

  return (
    <ThemeProvider theme={theme}>
      <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          style={{ background: '#f48fb1'}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Matriculas
            </Typography>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}
