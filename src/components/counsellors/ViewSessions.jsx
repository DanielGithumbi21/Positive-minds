import React, { useEffect, useState } from 'react'
import { getSessions } from '../../Data/users/counsellors'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material'
const ViewSessions = () => {
    const navigate = useNavigate()
    const [sessions, setSessions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getSessions(setIsLoading).then((data) => {
            setSessions(data)
        })
    }, [])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const handleChange = (e, value) => {
        setCurrentPage(value);
    };
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = sessions.slice(indexOfFirstPost, indexOfLastPost)
    return (
        <React.Fragment>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
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
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            {
                                currentPosts.map((session) => (
                                    <tbody>
                                        <tr>

                                            {
                                                new Date(session.time).getTime() - new Date(Date.now()).getTime() >= 0 ?
                                                    <>
                                                        <th scope="row" >{session.id}</th>
                                                        <td>{session.topic}</td>
                                                        <td>{session.counselor_profile.name}</td>
                                                        <td>{session.location}</td>
                                                        <td><button className="btn-success btn-md btn" onClick={(() => navigate(`/session/${session.id}/details`))} >View</button></td>
                                                    </> : ""
                                            }



                                        </tr>

                                    </tbody>
                                ))
                            }



                        </table>
                        <div className="mt-5 text-center">
                            <Pagination className='text-center' count={Math.ceil(sessions.length / postsPerPage)} onChange={handleChange} color="secondary" />
                        </div>
                    </div>
            }

        </React.Fragment>

    )
}

export default ViewSessions