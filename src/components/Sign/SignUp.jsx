import React, { useState } from 'react'
import { Typography, TextField, Container, Card } from '@mui/material';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [isCounsellor, setIsCounsellor] = useState(false)
    const switchMode = () => setIsCounsellor((prev) => !prev)
    const navigate = useNavigate()
    return (
        <Container sx={{
            width: "40%",
            marginTop: "5%"
        }}>
            <Card sx={{
                textAlign: "center",
                padding: "20px",
            }} >
                <Typography variant="h5" className='mb-3' gutterBottom>
                    Positive Minds
                </Typography>
                <Typography variant="subtitle1" className='mb-4' gutterBottom>
                    Please create an account as a {isCounsellor ? "Counsellor" : "Patient"}.
                </Typography>
                <div class="form-floating mb-3">
                    <TextField
                        fullWidth
                        id="outlined-required"
                        label="Name"
                        type="text"
                    />
                </div>
                <div class="form-floating mb-3">
                    <TextField
                        fullWidth
                        id="outlined-required"
                        label="Email"
                        type="email"
                    />
                </div>
                <div class="form-floating mb-3">
                    <TextField
                        fullWidth
                        id="outlined-required"
                        label="Phone Number"
                        type="text"
                    />
                </div>
                <div class="form-floating mb-3">
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />

                </div>
                <div class="form-floating mb-3">
                    <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                    />

                </div>
                <button className="btn btn-primary btn-md mb-3">Register</button>
                <div>
                    <button className="btn btn-outline-primary btn-md mb-3" onClick={switchMode}>Register as a {isCounsellor ? "Patient" : "Counsellor"} </button>
                </div>
                <div>
                    Dont have an account? <button className='btn btn-md btn-outline ' onClick={(() => navigate("/login"))} >Login</button>
                </div>

            </Card>
        </Container >
    )
}

export default SignUp