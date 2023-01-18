import React, { useState } from "react";
import { useLocalStorage } from 'usehooks-ts'
import useMediaQuery from '@mui/material/useMediaQuery';
const DataContext = React.createContext({});
const DataProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
    const [user, setUser] = useLocalStorage("user", null)
    const [counsellor, setCounsellor] = useLocalStorage("counsellor", null)


    const smallScreen = useMediaQuery('(max-width:800px)');


    const [loggedUser, setLoggedUser] = useLocalStorage("loggedUser", false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <DataContext.Provider value={{ open, handleDrawerClose, handleDrawerOpen, loggedUser, user, setUser, setLoggedUser, smallScreen, counsellor, setCounsellor }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };