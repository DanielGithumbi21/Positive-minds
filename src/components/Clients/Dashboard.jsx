import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Card } from '@mui/material'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import { getSessions } from '../../Data/users/counsellors';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {
    const navigate = useNavigate()
    const [sessions, setSessions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getSessions(setIsLoading).then((data) => {
            setSessions(data)
        })
    }, [])

    const availableSessions = sessions.filter((session) => {
        return new Date(session.time).getTime() - new Date(Date.now()).getTime() >= 0
    })

    console.log(availableSessions)
    return (
        <React.Fragment>
            <div className="container-fluid client-dashboard">
                <div className="row padding">
                    <div className="col-lg-6">

                    </div>
                    <div className="col-lg-6">
                        <h3 style={{
                            fontWeight: "550",
                            color: "white"
                        }}>
                            Everything will be alright.
                            You just need a community
                            to share love...
                        </h3>
                        <button className="btn btn-success btn-lg" onClick={(() => navigate("/client/be-a-therapist"))}>Be a Therapist</button>
                    </div>
                </div>

            </div>
            <div className="container-fluid mt-3">
                <h5 style={{
                    fontWeight: "600",
                    color: "#143E35"
                }} className="mt-3 mb-3" >
                    Overview
                </h5>
                <div className="row padding">
                    <div className="col-lg-4">
                        <Card sx={{
                            backgroundColor: "#143E35",
                            color: "white",
                            height: "150px",
                            marginBottom: "10px"

                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Available Sessions</h6>
                                        <h6 className='mb-2'>{availableSessions.length}</h6>
                                        <button className="btn btn-success btn-sm" onClick={(() => navigate("/view-sessions"))}>View</button>

                                    </div>
                                    <div className="col-lg-2">
                                        <CalendarMonthIcon sx={{
                                            color: "#E59438",
                                            marginTop: "10px",

                                        }} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card sx={{
                            backgroundColor: "#143E35",
                            color: "white",
                            height: "150px",
                            marginBottom: "10px"
                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Sessions in progress</h6>
                                        <h6 className='mb-2'>0</h6>
                                        <button className="btn btn-success btn-sm" onClick={(() => navigate("/view-sessions"))}>View</button>

                                    </div>
                                    <div className="col-lg-2">
                                        <HourglassFullIcon sx={{
                                            color: "#E59438",
                                            marginTop: "10px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='dashboard-card' sx={{
                            color: "black",
                            height: "150px",
                            marginBottom: "10px"

                        }}>
                            <h6 className='mb-5' style={{ fontWeight: "600" }} >My Calendar</h6>
                            <div className="text-center mt-5">
                                <button className="btn btn-success btn-sm">View</button>
                            </div>


                        </Card>
                    </div>
                </div>

            </div>
            <div className="container-fluid mt-3">
                <h5 style={{
                    fontWeight: "600",
                    color: "#143E35"
                }} className="mt-3 mb-3" >
                    Available sessions
                </h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Theme</th>
                            <th scope="col">Therapist</th>
                            <th scope="col">Location</th>

                        </tr>
                    </thead>

                    {
                        availableSessions.slice(0, 3).map((session) => (
                            <tbody>
                                <tr>


                                    <th scope="row" >{session.id}</th>
                                    <td>{session.topic}</td>
                                    <td>{session.counselor_profile.name}</td>
                                    <td>{session.location}</td>




                                </tr>

                            </tbody>
                        ))
                    }


                </table>
            </div>
        </React.Fragment>
    )
}

export default Dashboard