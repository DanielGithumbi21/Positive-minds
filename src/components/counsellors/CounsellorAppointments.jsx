import React, { useState, useEffect, useContext } from 'react'
import { getAppointments, getSessions } from '../../Data/users/counsellors'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material'
import { DataContext } from '../../Context/DataContext';
const CounsellorAppointments = () => {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { user } = useContext(DataContext)

    useEffect(() => {
        getAppointments(setIsLoading).then((data) => {
            setAppointments(data)
        })
    }, [])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const handleChange = (e, value) => {
        setCurrentPage(value);
    };
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = appointments.slice(indexOfFirstPost, indexOfLastPost)
    console.log(appointments)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className="container-fluid mt-3">
                        <h5 style={{
                            fontWeight: "600",
                            color: "#143E35"
                        }} className="mt-3 mb-3" >
                            Available appointments
                        </h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Time</th>

                                </tr>
                            </thead>
                            {
                                appointments.map((appointment) => (
                                    <tbody>
                                        <tr>

                                            {
                                                user.is_counselor ?
                                                    <>
                                                        {
                                                            appointment.counselor_profile_id === user.user.counselor_profile.id ?
                                                                <>
                                                                    <th scope="row" >{appointment.id}</th>
                                                                    <td>{appointment.topic}</td>
                                                                    <td>{appointment.title}</td>
                                                                    <td>{appointment.location}</td>
                                                                    <td>{new Date(appointment.time).toLocaleString()}</td>
                                                                </> : ""
                                                        }
                                                    </> :
                                                    <>
                                                        {
                                                            appointment.user_id === user.user.id ?
                                                                <>
                                                                    <th scope="row" >{appointment.id}</th>
                                                                    <td>{appointment.topic}</td>
                                                                    <td>{appointment.title}</td>
                                                                    <td>{appointment.location}</td>
                                                                    <td>{new Date(appointment.time).toLocaleString()}</td>
                                                                </> : ""
                                                        }
                                                    </>
                                            }





                                        </tr>

                                    </tbody>
                                ))
                            }



                        </table>

                    </div>
            }

        </React.Fragment>
    )
}

export default CounsellorAppointments