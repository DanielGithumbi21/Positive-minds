import { Container, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getCounselorProfile } from '../../Data/users/users'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Appointments = () => {
    const navigate = useNavigate()
    const [counsellors, setCounsellors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCounselorProfile(setIsLoading).then((data) => {
            setCounsellors(data)
        })
    }, [])

    console.log(counsellors)
    return (

        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <Container sx={{
                        padding: "20px"
                    }}>
                        <h5 style={{ color: "#143E35" }}>Book an appointment with our counsellors</h5>
                        <hr className="light mb-5 mt-3" />
                        <div className="row padding">
                            {
                                counsellors.map((counsellor) => (
                                    <div className="col-lg-4">
                                        <Card sx={{
                                            padding: "20px",
                                            marginBottom: "40px",
                                            height: "200px",
                                            backgroundColor: "#143E35",
                                            color: "white",
                                        }}>
                                            <div className="row padding">
                                                <div className="col-lg-4">
                                                    <Stack direction="row" spacing={2}>
                                                        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={counsellor.user.avatar} />
                                                    </Stack>



                                                </div>
                                                <div className="col-lg-8">
                                                    <div>
                                                        <Typography sx={{ marginTop: "40px" }} className='mb-3' variant='subtitle'>
                                                            {counsellor.user.name}
                                                        </Typography>
                                                    </div>

                                                    <div>
                                                        <Typography sx={{ marginTop: "40px" }} className='mt-3' variant='subtitle'>
                                                            {counsellor.specialization}
                                                        </Typography>
                                                    </div>

                                                    <div className='mt-4'>
                                                        <button className="btn btn-md btn-success" onClick={(() => navigate(`/client/${counsellor.id}/book-appointment`))} >Book</button>

                                                    </div>

                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                ))
                            }
                        </div>



                    </Container>
            }

        </React.Fragment>

    )
}

export default Appointments