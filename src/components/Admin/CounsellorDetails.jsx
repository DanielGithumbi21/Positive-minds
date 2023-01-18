import React, { useEffect, useState } from 'react'
import { deleteCounsellorProfile, getSingleCounselorProfile, verifyCounsellor } from '../../Data/users/users'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import AlertDialog from '../Clients/Dialog';

const CounsellorDetails = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [counsellor, setCounsellor] = useState({})
    const [counsellorProfile, setCounsellorProfile] = useState({})
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const onDelete = () => {
        deleteCounsellorProfile(navigate, params.id, setOpen)

    }
    const onVerify = () => {
        verifyCounsellor(params.id, navigate)
    }
    const params = useParams()
    useEffect(() => {
        getSingleCounselorProfile(setIsLoading, params.id).then((data) => {
            setCounsellorProfile(data)
            setCounsellor(data.user)
        })
    }, [])

    console.log(counsellorProfile)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className="container-fluid p-4">
                        {
                            open ? <AlertDialog open={open} title={`Delete counsellor ${counsellorProfile.name}`} content="Are you sure? Once done, this can't be reversed." button="Delete" handleClose={handleClose} handleClickHome={onDelete} /> : ""
                        }
                        <div className="row padding">
                            <div className="col-lg-6">

                            </div>
                            <div className="col-lg-6 "   >

                                <button className="btn-success btn btn-md" style={{ marginLeft: "50px" }} disabled={counsellorProfile.verified ? true : false} onClick={onVerify}>
                                    {counsellorProfile.verified ? "Already Verified" : "Verify"}
                                </button>
                                <button className="btn-danger btn btn-md" style={{ marginLeft: "10px" }} onClick={handleOpen}>
                                    Delete
                                </button>
                            </div>
                            <Container>
                                <div className="row padding">
                                    <h4 className='text-center mt-5'>Counsellor</h4>
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
                                                        <th>Email</th>
                                                        <td>{counsellor.email}</td>
                                                    </tr>

                                                    <tr>
                                                        <th>Gender</th>
                                                        <td>{counsellor.gender}</td>
                                                    </tr>

                                                </tbody>
                                            </>


                                        </table>

                                    </div>
                                </div>
                            </Container>
                            <Container>
                                <div className="row padding">
                                    <h4 className='text-center mt-5'>Counsellor Profile</h4>

                                    <table className="table mt-5 mb-5">

                                        <>
                                            <tbody >
                                                <tr >
                                                    <th>Experience</th>
                                                    <td>{counsellorProfile.experience}</td>
                                                </tr>
                                                <tr >
                                                    <th>Specialization</th>
                                                    <td>{counsellorProfile.specialization}</td>
                                                </tr>

                                                <tr>
                                                    <th>Bio</th>
                                                    <td>{counsellorProfile.bio}</td>
                                                </tr>

                                            </tbody>
                                        </>


                                    </table>

                                </div>
                            </Container>
                        </div>
                    </div>
            }
        </React.Fragment>

    )
}

export default CounsellorDetails