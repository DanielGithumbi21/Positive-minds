import React, { useContext, useState } from 'react'
import { Container, Card, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataContext } from '../../Context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import { bookAppointment } from '../../Data/users/users';

const BookAppointment = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const initialState = { topic: '', title: '', description: '', location: '' }
    const [formData, setFormData] = useState(initialState)
    const { user } = useContext(DataContext)
    const params = useParams()
    const [value, setValue] = useState(dayjs(Date.now()));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleEventChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const post = {
            time: value,
            user_id: user.user.id,
            counselor_profile_id: params.id,
            topic: formData.topic,
            title: formData.title,
            description: formData.description,
            location: formData.location
        }

        bookAppointment(post, setIsLoading, navigate)
    }
    return (
        <div className='container p-4'>
            <h5 style={{ color: "#143E35" }}>Book an appointment</h5>
            <hr className="light mb-3 mt-3" />

            <Card className='p-5'>
                <form onSubmit={onSubmit} >
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Topic</label>
                        <input name='topic' required onChange={handleEventChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="topic..." />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input name='title' required onChange={handleEventChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="title..." />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Location</label>
                        <input name='location' required onChange={handleEventChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="location..." />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Time</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>

                                <DateTimePicker
                                    label="Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </Stack>
                        </LocalizationProvider>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea name="description" required onChange={handleEventChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-success" disabled={isLoading ? true : false}>Book</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default BookAppointment