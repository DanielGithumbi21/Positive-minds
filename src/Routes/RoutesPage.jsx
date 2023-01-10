import React, { useContext } from 'react'
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Sidebar from '../components/Sidebar/Sidebar';
import TopAppBar from '../components/AppBar/AppBar';
import { DataContext } from '../Context/DataContext';
const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const RoutesPage = () => {
    const { open } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopAppBar />
            <Sidebar />
            <Main open={open}>
                <DrawerHeader />


            </Main>
        </Box>
    )
}

export default RoutesPage