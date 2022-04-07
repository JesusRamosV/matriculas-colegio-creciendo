import React from 'react'
import { Box, CardContent, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns';

export const GeneralStudendInformation = () => {

    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChangeTipoDocumento = (event) => {
        setAge(event.target.value);
    };

    const handleChangeGenero = (event) => {
        setGender(event.target.value);
    };

    const [valueDateofbirth, setValueDateofbirth] = React.useState(null);

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignContent={'center'}
  >
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      ml={5}
    >
      <Typography
        variant="h8" color="text.secondary"
        sx={{
          borderBottom: 1,
          borderColor: 'grey.500'
        }
        }
      >
        1. INFORMACION GENERAL DEL ALUMNO
      </Typography>

    </Grid>

    <Grid item xs={12} md={12}
      container
      direction="row"
      justifyContent="left"
      m={4}


    >
      <TextField
        required
        label="Primer Nombre"
        placeholder=''
      />
      <TextField
        label="Segundo Nombre"
        placeholder=''
      />
      <TextField
        required
        label="Primer Apellido"
        placeholder=''
      />
      <TextField
        label="Segundo Apellido"
        placeholder=''
      />
      <FormControl sx={{ m: 1, minWidth: 224 }}>
        <InputLabel id="demo-simple-select-label">Tipo de Documento</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={age}
          label="Tipo de documento"
          onChange={handleChangeTipoDocumento}
        >
          <MenuItem value='Registro Civil'>Registro Civil</MenuItem>
          <MenuItem value='Tarjeta de Identidad'>Tarjeta de Identidad</MenuItem>

        </Select>
      </FormControl>
      <TextField
        label="Número (sin puntos)"
        type="number"
      />
      <TextField
        label="Edad"
        type="number"
      // }}
      />
      <FormControl sx={{ m: 1, minWidth: 224 }}>
        <InputLabel id="demo-simple-select-label">Género</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={gender}
          label="Género"
          onChange={handleChangeGenero}
        >
          <MenuItem value='Masculino'>Maculino</MenuItem>
          <MenuItem value='Femenino'>Femenino</MenuItem>

        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Fecha de Nacimiento"
          value={valueDateofbirth}
          onChange={(newValue) => {
            setValueDateofbirth(newValue);
            console.log(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField
        label="Dpto de Nacimiento"
        placeholder=''
      />
      <TextField
        label="Municipio de Nacimiento"
        placeholder=''
      />
      <TextField
        label="Lugar de Expedición"
        placeholder=''
      />
      <TextField
        label="Dirección"
        placeholder=''
      />
      <TextField
        label="Barrio"
        placeholder=''
      />
      <TextField
        label="Celular"
        type="number"
      />
    </Grid>



  </Grid>
  )
}
