import * as React from 'react';


import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CardContent, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MatriculateAppBar } from './MatriculateAppBar'
import { MatriculateSection } from './MatriculateSection';
import { Link } from 'react-router-dom';
import theme, { useStyles } from '../helper/temaConfig';

const drawerWidth = 300;



export const Sidebar = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNena = () => {
        console.log('Hola nena');
    }

    const clases = useStyles(props);

    const [matriculateActive, setMatriculateActive] = React.useState(true)

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item alignItems="center"
                    onClick={handleNena}
                    className={clases.pointer}
                >
                    <Link to="auth/register">
                        <AddCircleOutlineIcon sx={{ fontSize: 60 }} style={{ color: '#f48fb1' }} />
                    </Link>


                </Grid>
                <Grid item alignItems="center">


                    <CardContent>
                        <Typography variant="h8" color="text.secondary">
                            Nueva Matricula
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
                <MatriculateAppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {!matriculateActive
                ?
                <h1>Hola Mundo</h1>


                : <MatriculateSection drawerWidth={drawerWidth} />
            }

        </Box>
    );
}



