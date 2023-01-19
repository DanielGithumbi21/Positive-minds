import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../Data/users/users'
import image from "../../assets/placeholder.jpg"
import CircularProgress from '@mui/material/CircularProgress';
import "./Profile.css"
import EditProfile from './EditProfile'
const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getProfile(setIsLoading).then((data) => setData(data))
    }, [])
    // console.log(data)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className="row padding p-3">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <div className="text-left">
                                <button className="btn btn-success" onClick={() => navigate('/edit-profile')}>Edit Profile</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className='business-details-image ' src={data.avatar === null ? image : data.avatar} />
                        </div>
                        <div className="col-lg-6">
                            <table className="table mt-5">

                                <>
                                    <tbody >
                                        <tr >
                                            <th>Name</th>
                                            <td>{data.name}</td>
                                        </tr>
                                        <tr >
                                            <th>Email</th>
                                            <td>{data.email}</td>
                                        </tr>

                                        <tr>
                                            <th>Age</th>
                                            <td>{data.age}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <td>{data.gender}</td>
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

export default Profile