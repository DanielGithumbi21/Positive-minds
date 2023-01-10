import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { drawerItems } from './sideBarItems';
import { DataContext } from '../../Context/DataContext';
import { Divider } from '@mui/material';

const drawerWidth = 300;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Sidebar() {
    const theme = useTheme();
    const { open, handleDrawerClose } = React.useContext(DataContext)

    return (
        <React.Fragment >

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: "#143E35",
                        color: "#FFFFFF",
                        fontFamily: "Proza Libre"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {drawerItems.map((item) => (
                        <>
                            {/* <Typography sx={{ marginLeft: "40px" }} variant="subtitle2" gutterBottom>
                                {item.name}

                            </Typography> */}
                            <Divider sx={{ marginTop: "20px", backgroundColor: "#FFFFFF" }} />

                            {
                                item.items.map((item) => (
                                    <ListItem key={item.name} >
                                        <ListItemButton>
                                            <ListItemIcon sx={{
                                                color: "#FFFFFF"
                                            }}>
                                                <item.Icon />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </>
                    ))}
                </List>

            </Drawer>

        </React.Fragment>
    );
}
