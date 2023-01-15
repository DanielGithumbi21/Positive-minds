import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { DataContext } from '../../Context/DataContext';
import { Typography, Container } from '@mui/material';

const CounsellorDashboard = () => {

    const { user } = useContext(DataContext)


    return (
        <React.Fragment>
            <div className="container-fluid p-5 mb-3">
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src={user.user.avatar} />
                    <div className="mt-4" style={{ marginLeft: "300px" }}>
                        <Typography variant='h5' sx={{ marginTop: "30px" }} >{user.user.name}</Typography>
                        <Typography variant='subtitle1' sx={{ marginTop: "10px" }}>{user.user.counselor_profile[0].specialization}</Typography>
                    </div>
                </Stack>
            </div>

            <Container sx={{
                backgroundColor: "#143E35",
                color: "white",
                padding: "20px"
            }}>
                <Typography variant="h5" sx={{ marginBottom: "10px" }} >
                    Personal Summary
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: "10px" }} >
                    Experience
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "10px" }} >
                    {user.user.counselor_profile[0].experience}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: "10px" }} >
                    Bio
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: "10px" }} >
                    {user.user.counselor_profile[0].bio}
                </Typography>
            </Container>
        </React.Fragment>
    )
}

export default CounsellorDashboard