import React, { useContext } from 'react'
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Sidebar from '../components/Sidebar/Sidebar';
import TopAppBar from '../components/AppBar/AppBar';
import { DataContext } from '../Context/DataContext';
import { Route, Routes } from 'react-router';
import Dashboard from '../components/Clients/Dashboard';
import Profile from '../components/Clients/Profile';
import BeTherapist from '../components/Clients/BeTherapist';
import PrivateRoute from './PrivateRoute';
import CounsellorDashboard from '../components/counsellors/Dashboard';
import CreateSession from '../components/counsellors/CreateSession';
import ViewSessions from '../components/counsellors/ViewSessions';
import SessionsDetails from '../components/counsellors/SessionsDetails';
import Appointments from '../components/Clients/Appointments';
import BookAppointment from '../components/Clients/BookAppointment';
import CounsellorProfileRequests from '../components/Admin/CounsellorProfileRequests';
import CounsellorDetails from '../components/Admin/CounsellorDetails';
import AdminDashboard from '../components/Admin/AdminDashboard';

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
    const { open, loggedUser } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {
                loggedUser && (
                    <>
                        <TopAppBar />
                        <Sidebar />
                    </>
                )
            }

            <Main open={open} sx={{
                padding: "50px"
            }}>
                <DrawerHeader />
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path='/client' element={<Dashboard />} />
                        <Route path='/client/profile' element={<Profile />} />
                        <Route path='/client/be-a-therapist' element={<BeTherapist />} />
                        <Route path='/client/appointments' element={<Appointments />} />
                        <Route path='/client/:id/book-appointment' element={<BookAppointment />} />
                        <Route path="/counsellor" element={<CounsellorDashboard />} />
                        {/* <Route path="/admin" element={AdminDashboard />} /> */}
                        <Route path="/counsellor/create-session" element={<CreateSession />} />
                        <Route path="/view-sessions" element={<ViewSessions />} />
                        <Route path="/session/:id/details" element={<SessionsDetails />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path='/admin/be-counsellor' element={<CounsellorProfileRequests />} />
                        <Route path='/admin/:id/counsellor-details' element={<CounsellorDetails />} />
                    </Route>
                </Routes>

            </Main>
        </Box>
    )
}

export default RoutesPage