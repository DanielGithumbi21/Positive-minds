import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { clientItems, counsellorItems } from './sideBarItems';
import { DataContext } from '../../Context/DataContext';
import { Divider } from '@mui/material';
import { NavLink } from "react-router-dom";
import "./Sidebar.css"
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
    const { open, handleDrawerClose, user } = React.useContext(DataContext)
    let activeStyle = {
        color: "black",
    };
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
                    {
                        user.user.is_counselor ?
                            <React.Fragment>
                                {counsellorItems.map((item) => (
                                    <>


                                        <Divider sx={{ marginTop: "20px", backgroundColor: "#FFFFFF" }} />

                                        {
                                            item.items.map((item) => (
                                                <NavLink to={item.link} className="links" style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } >
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
                                                </NavLink>
                                            ))
                                        }
                                    </>
                                ))}
                            </React.Fragment>
                            :
                            user.user.is_admin ?
                                ""
                                :
                                <React.Fragment>
                                    {clientItems.map((item) => (
                                        <>


                                            <Divider sx={{ marginTop: "20px", backgroundColor: "#FFFFFF" }} />

                                            {
                                                item.items.map((item) => (
                                                    <NavLink to={item.link} className="links" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    } >
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
                                                    </NavLink>
                                                ))
                                            }
                                        </>
                                    ))}
                                </React.Fragment>
                    }

                </List>

            </Drawer>

        </React.Fragment>
    );
}
