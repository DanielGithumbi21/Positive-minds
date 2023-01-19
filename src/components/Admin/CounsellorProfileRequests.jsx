import React, { useEffect, useState } from 'react'
import { getCounselorProfile } from '../../Data/users/users'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const CounsellorProfileRequests = () => {
    const navigate = useNavigate()
    const [counsellorProfile, setCounsellorProfile] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCounselorProfile(setIsLoading).then((data) => {
            setCounsellorProfile(data)
        })
    }, [])

    console.log(counsellorProfile)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className='container-fluid'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Verification</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            {
                                counsellorProfile.map((counsellor) => (
                                    <tbody>
                                        <tr>


                                            <th scope="row" >{counsellor.user.id}</th>
                                            <td>{counsellor.user.name}</td>
                                            <td>{counsellor.user.email}</td>
                                            <td>{counsellor.verified ? "Verified" : "Not Verified"}</td>
                                            <td><button className="btn-success btn-md btn" onClick={(() => navigate(`/admin/${counsellor.id}/counsellor-details`))} >View</button></td>



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

export default CounsellorProfileRequests