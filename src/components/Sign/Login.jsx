import React, { useState } from 'react'
import { Typography, TextField, Container, Card } from '@mui/material';
import { useNavigate } from 'react-router';

const Login = () => {
    const [isCounsellor, setIsCounsellor] = useState(false)
    const switchMode = () => setIsCounsellor((prev) => !prev)
    const navigate = useNavigate()
    return (
        <Container sx={{
            width: "40%",
            marginTop: "10%"
        }}>
            <Card sx={{
                textAlign: "center",
                padding: "20px"
            }} >
                <Typography variant="h5" className='mb-3' gutterBottom>
                    Positive Minds
                </Typography>
                <Typography variant="subtitle1" className='mb-5' gutterBottom>
                    Please sign in as a {isCounsellor ? "Counsellor" : "Patient"}.
                </Typography>
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
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />

                </div>
                <button className="btn btn-primary btn-md mb-3">Login</button>
                <div>
                    <button className="btn btn-outline-primary btn-md mb-3" onClick={switchMode}>Login as a {isCounsellor ? "Patient" : "Counsellor"} </button>
                </div>
                <div>
                    Dont have an account? <button className='btn btn-sm btn-outline ' onClick={(() => navigate("/sign-up"))} >Register</button>
                </div>

            </Card>
        </Container >
    )
}

export default Login