import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import { Card } from '@mui/material'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import AttributionIcon from '@mui/icons-material/Attribution';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  { CardsData } from '../Admin/AdminData'
import { getSessions } from '../../Data/users/counsellors';
import { useNavigate } from 'react-router-dom';




const AdminDashboard = () => {
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
    
    const cardsData = CardsData.filter((title, value, barValue) => {
        return(
            <div>
                title={title},
                value={value},
                barValue={barValue}
            </div>
        )
    }) 
    

    return (
        <React.Fragment>
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
                            width:"250px",
                            marginLeft:"750px",
                            marginBottom: "10px"

                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Available Sessions</h6>
                                        <h6 className='mb-2'>{availableSessions.length}</h6>
                                        <div className='radialBar'>
                                         <CircularProgressbar
                                            value={16}
                                            text={`${26}%`}
                                         />
                                         </div>

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
                            width:"250px",
                            marginLeft:"480px",
                            marginBottom: "10px"
                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Available client</h6>
                                        <h6 className='mb-2'>200</h6>
                                        <div className='radialBar'>
                                         <CircularProgressbar
                                          value={80}
                                          text={`${80}%`}
                                         />
                                         </div>

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
                        <Card sx={{
                            backgroundColor: "#143E35",
                            color: "white",
                            height: "150px",
                            width:"250px",
                            marginLeft:"200px",
                            marginBottom: "10px"
                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Available Counselors</h6>
                                        <h6 className='mb-2'>80</h6>
                                        <div className='radialBar'>
                                         <CircularProgressbar
                                          value={40}
                                          text={`${40}%`}
                                         />
                                         </div>

                                    </div>
                                    <div className="col-lg-2">
                                        <AttributionIcon sx={{
                                            color: "#E59438",
                                            marginTop: "10px"
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
                            width:"250px",
                            marginBottom: "10px",
                            marginTop:"-160px",
                            marginLeft:"410px"
                        }}>
                            <div className="container mb-3">
                                <div className="row padding">
                                    <div className="col-lg-10">
                                        <h6 className='mt-3 mb-3'>Costomer reviews</h6>
                                        <h6 className='mb-2'>100</h6>
                                        <div className='radialBar'>
                                         <CircularProgressbar
                                          value={50}
                                          text={`${50}%`}
                                          />
                                         </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <AutoStoriesIcon sx={{
                                            color: "#E59438",
                                            marginTop: "10px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
            
        </React.Fragment>
    )
}

export default AdminDashboard