import { Grid } from '@mui/material'
import React from 'react'
import { LoginScreen } from '../auth/LoginScreen'
import { Sidebar } from './Sidebar'

export const MatriculateScreen = () => {
  return (
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="flex-start"
    spacing={0}
    >
        <Grid item xs>
          <Sidebar />
        </Grid>  
     
    </Grid>
  )
}
