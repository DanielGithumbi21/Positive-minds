import React, { useContext } from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DataContext } from '../../Context/DataContext';

const drawerWidth = 300;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const TopAppBar = () => {
    const { open, handleDrawerOpen } = useContext(DataContext)


    return (
        <React.Fragment>
            <AppBar elevation={0} position="fixed" open={open} sx={{
                backgroundColor: "#FFFFFF",
                color: "#808080",
                padding: "20px"
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="row padding">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <Typography variant="h6" noWrap component="div">
                                Welcome, Moraa
                            </Typography>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default TopAppBar