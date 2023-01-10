import React, { useState } from "react";

const DataContext = React.createContext({});
const DataProvider = ({ children }) => {

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <DataContext.Provider value={{ open, handleDrawerClose, handleDrawerOpen }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };