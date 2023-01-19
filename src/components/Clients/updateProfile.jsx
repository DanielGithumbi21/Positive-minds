import { Container, Divider, Typography, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getSingleUser } from '../../Data/users/users'
import { useParams } from 'react-router-dom'

const UpdateProfile = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({ name: "", username: "", email: "", age: "", avatar: "" })

    const params = useParams()
    useEffect(() => {
        getSingleUser(setIsLoading, params.id)
            .then((data) => setUser(data))
    }, [])
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)
    return (
        <Container sx={{ padding: "20px" }}>
            <Card sx={{ padding: "20px" }}>
                <Typography variant='h6'>
                    Update Your Profile
                </Typography>
                <hr className='light mb-4' />
                <form >
                    <div className="row padding">
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input onChange={handleChange} defaultValue={user.name} name='name' required type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Username</label>
                                <input onChange={handleChange} defaultValue={user.username} name='username' required type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input onChange={handleChange} defaultValue={user.email} name='email' required type="email" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Age</label>
                                <input onChange={handleChange} defaultValue={user.age} name='Age' required type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Avatar</label>
                            <input onChange={handleChange} defaultValue={user.avatar} name='avatar' required type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-success btn-md">Update</button>
                    </div>
                </form>
            </Card>
        </Container>
    )
}

export default UpdateProfile