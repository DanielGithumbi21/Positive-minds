import React, { useContext, useState } from 'react'
import { Typography, TextField, Container, Card, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import { useNavigate } from 'react-router';
import { loginUser, registerUser } from '../../Data/Auth/Data';
import { DataContext } from '../../Context/DataContext';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const switchMode = () => setIsSignup((prev) => !prev)
    const navigate = useNavigate()
    const initialState = { name: "", username: "", email: "", gender: "", age: "", avatar: "", password: "" }
    const [formData, setFormData] = useState(initialState)
    const { setUser, setLoggedUser } = useContext(DataContext)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError("")
    }

    const onSubmit = (e) => {
        e.preventDefault()

        isSignup ?
            registerUser(formData, setLoggedUser, setUser, navigate, setIsLoading, setError)
            : loginUser(formData, setLoggedUser, setUser, navigate, setIsLoading, setError)
    }
    console.log(formData)

    return (
        <Container sx={{
            width: "40%",
            marginTop: "9%"
        }}>
            <Card sx={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#FFF"
            }} >
                <Typography variant="h5" className='mb-3' gutterBottom>
                    Positive Minds
                </Typography>
                <Typography variant="subtitle1" className='mb-5' gutterBottom>
                    Please {isSignup ? "Register" : "Login"}  .
                </Typography>

                {
                    isSignup ?
                        <form onSubmit={onSubmit}>
                            <Typography variant="subtitle1" className='mb-4' gutterBottom>
                                {error}
                            </Typography>
                            <div className="row padding">

                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Name"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Username"
                                            type="text"
                                            name="username"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Email"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={formData.gender}
                                                label="Gender"
                                                onChange={handleChange}
                                                required
                                                name="gender"
                                            >
                                                <MenuItem value="Male">Male</MenuItem>
                                                <MenuItem value="Female">Female</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Age"
                                            type="text"
                                            name="age"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-floating mb-3">
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Avatar"
                                            type="text"
                                            name="avatar"
                                        />
                                    </div>
                                </div>
                                <div class="form-floating mb-3">
                                    <TextField
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        name='password'
                                    />

                                </div>


                            </div>
                            <button className="btn btn-success btn-md mb-3" disabled={isLoading ? true : false} >  Register</button>

                        </form>
                        :
                        <React.Fragment>
                            <form onSubmit={onSubmit}>
                                <Typography variant="subtitle1" className='mb-4 text-danger' gutterBottom>
                                    {error}
                                </Typography>
                                <div class="form-floating mb-3">
                                    <TextField
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Username"
                                        type="text"
                                        name='username'
                                    />
                                </div>
                                <div class="form-floating mb-3">
                                    <TextField
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        name="password"
                                    />

                                </div>
                                <button className="btn btn-success btn-md mb-3" disabled={isLoading ? true : false}>  Login</button>

                            </form>
                        </React.Fragment>
                }


                <div>
                    <button className="btn btn-outline-success btn-md mb-3" onClick={switchMode}>{isSignup ? "Already have an account? Login" : "Don't have an account? Register"} </button>
                </div>

            </Card>
        </Container >
    )
}

export default Login