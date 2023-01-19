import React, { Suspense, lazy, useContext } from 'react'
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { DataContext } from '../Context/DataContext';
import { Route, Routes } from 'react-router';
import PrivateRoute from './PrivateRoute';
import CircularProgress from '@mui/material/CircularProgress';
import Sidebar from '../components/Sidebar/Sidebar';
import TopAppBar from '../components/AppBar/AppBar'
import EditProfile from '../components/Clients/EditProfile'
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
    const Dashboard = lazy(() => import('../components/Clients/Dashboard'))
    const Profile = lazy(() => import('../components/Clients/Profile'))
    const BeTherapist = lazy(() => import('../components/Clients/BeTherapist'))
    const CounsellorDashboard = lazy(() => import('../components/counsellors/Dashboard'))
    const CreateSession = lazy(() => import('../components/counsellors/CreateSession'))
    const ViewSessions = lazy(() => import('../components/counsellors/ViewSessions'))
    const SessionsDetails = lazy(() => import('../components/counsellors/SessionsDetails'))
    const Appointments = lazy(() => import('../components/Clients/Appointments'))
    const BookAppointment = lazy(() => import('../components/Clients/BookAppointment'))
    const CounsellorDetails = lazy(() => import('../components/Admin/CounsellorDetails'))
    const AdminDashboard = lazy(() => import('../components/Admin/AdminDashboard'))
    const CounsellorProfileRequests = lazy(() => import('../components/Admin/CounsellorProfileRequests'))
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
            <Suspense fallback={
                <div className="text-center"><CircularProgress color="success" /></div>
            }>
                {
                    loggedUser && (
                        <Main open={open} sx={{
                            padding: "50px"
                        }}>
                            <DrawerHeader />
                            <Routes>
                                <Route element={<PrivateRoute />}>
                                    <Route path='/client' element={<Dashboard />} />
                                    <Route path='/client/profile' element={<Profile />} />
                                    <Route path='/edit-profile' element={<EditProfile />} />
                                    <Route path='/client/be-a-therapist' element={<BeTherapist />} />
                                    <Route path='/client/appointments' element={<Appointments />} />
                                    <Route path='/client/:id/book-appointment' element={<BookAppointment />} />
                                    <Route path="/counsellor" element={<CounsellorDashboard />} />
                                    <Route path="/counsellor/create-session" element={<CreateSession />} />
                                    <Route path="/view-sessions" element={<ViewSessions />} />
                                    <Route path="/session/:id/details" element={<SessionsDetails />} />
                                    <Route path="/admin" element={<AdminDashboard />} />
                                    <Route path='/admin/be-counsellor' element={<CounsellorProfileRequests />} />
                                    <Route path='/admin/:id/counsellor-details' element={<CounsellorDetails />} />
                                </Route>
                            </Routes>

                        </Main>
                    )
                }

            </Suspense>


        </Box>
    )
}

export default RoutesPage