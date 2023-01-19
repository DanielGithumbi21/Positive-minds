import React, { useContext, useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { bookFromSession, getSessionDetails } from '../../Data/users/counsellors';
import { DataContext } from '../../Context/DataContext';
const SessionsDetails = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})
    const [counsellor, setCounsellor] = useState({})
    const { user } = useContext(DataContext)

    const params = useParams()
    useEffect(() => {
        getSessionDetails(setIsLoading, params.id).then((data) => {
            setData(data)
            setCounsellor(data.counselor_profile)
        })
    }, [])

    const bookAppointment = () => {
        bookFromSession(setIsLoading, params.id, navigate)
    }

    const time = new Date(data.time).getTime() - new Date(Date.now()).getTime()

    const timeInMinutes = time / 60000

    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className="container-fluid">
                        <div className="row padding p-3">

                            <h4 className='text-center'>Counsellor</h4>
                            <div className="col-lg-6">
                                <img className='business-details-image ' src={counsellor.avatar} />
                            </div>
                            <div className="col-lg-6">
                                <table className="table mt-5 mb-5">

                                    <>
                                        <tbody >
                                            <tr >
                                                <th>Name</th>
                                                <td>{counsellor.name}</td>
                                            </tr>
                                            <tr >
                                                <th>Specialization</th>
                                                <td>{counsellor.specialization}</td>
                                            </tr>

                                            <tr>
                                                <th>Bio</th>
                                                <td>{counsellor.bio}</td>
                                            </tr>

                                        </tbody>
                                    </>


                                </table>

                            </div>
                            <h4 className='mt-4 text-center'>Session</h4>
                            <div className="col-lg-6">
                                <h4 className='text-center align-center mt-5 mb-3'>Time Remaining</h4>
                                <h5 className='text-center'>
                                    {
                                        timeInMinutes < 60 ? `${Math.floor(timeInMinutes)} Minute(s)` : timeInMinutes / 60 < 24 ? `${Math.floor(timeInMinutes / 60)} Hour(s)` : `${Math.floor(timeInMinutes / 1440)} Day(s)`
                                    }
                                </h5>
                            </div>
                            <div className="col-lg-6">
                                <table className="table mt-5 mb-5">

                                    <>
                                        <tbody >
                                            <tr >
                                                <th>Topic</th>
                                                <td>{data.topic}</td>
                                            </tr>
                                            <tr >
                                                <th>Title</th>
                                                <td>{data.title}</td>
                                            </tr>

                                            <tr>
                                                <th>Location</th>
                                                <td>{data.location}</td>
                                            </tr>
                                            <tr>
                                                <th>Time</th>
                                                <td>{new Date(data.time).toLocaleString()}</td>
                                            </tr>

                                        </tbody>
                                    </>


                                </table>
                            </div>
                        </div>
                        {
                            user.user.is_admin || user.user.is_counselor ? "" :

                                <div className="text-center mb-3 mt-3">
                                    <button className="btn-success btn-md btn m-3" onClick={bookAppointment}>Book Session</button>

                                </div>
                        }


                    </div>
            }
        </React.Fragment>
    )
}

export default SessionsDetails