import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { getSessionDetails } from '../../Data/users/counsellors';
const SessionsDetails = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})
    const [counsellor, setCounsellor] = useState({})

    const params = useParams()
    useEffect(() => {
        getSessionDetails(setIsLoading, params.id).then((data) => {
            setData(data)
            setCounsellor(data.counselor_profile)
        })
    }, [])

    const time = new Date(data.time).getTime() - new Date(Date.now()).getTime()

    const timeInMinutes = time / 60000

    console.log(data)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
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
            }
        </React.Fragment>
    )
}

export default SessionsDetails