import React, { useEffect, useState } from 'react'

import { Box, CardContent, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ArrowForward, BorderColor } from '@mui/icons-material';
import { useStyles } from '../helper/temaConfig';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../helper/temaConfig';
import { GeneralStudendInformation } from './forms/GeneralStudendInformation';

export const MatriculateSection = (props) => {

    const [formularioActual, setFormularioActual] = useState(1);

    const Decrement = () => {
        setFormularioActual(formularioActual - 1)
    }

    const Increment = () => {
        setFormularioActual(formularioActual + 1)
    }

    
    const classes = useStyles(props);

    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                border: '1px dashed pink'
            }}
            noValidate
            autoComplete="off"
            alignContent={'center'}
            m={10}
        >
            <Toolbar />
            {(formularioActual === 1) && (
                <GeneralStudendInformation />
            )
            }
            <Divider />
            {/* <Toolbar /> */}
            <Toolbar >
                <Grid
                    className={classes.pointer}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ThemeProvider theme={theme}>

                    
                        <IconButton aria-label="Example" disabled={formularioActual === 1} color='secondary' onClick={Decrement}>
                            <ArrowBackIcon sx={{ fontSize: 40 }} />

                        </IconButton>
                        <IconButton onClick={Increment}>
                            <ArrowForward sx={{ fontSize: 40 }} style={{ color: '#f48fb1' }} />
                        </IconButton>
                    </ThemeProvider>
                </Grid>

            </Toolbar>

        </Box>
    )
}
