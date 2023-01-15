import { Card } from '@mui/material'
import React, { useContext, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createSession } from '../../Data/users/counsellors';
import { DataContext } from '../../Context/DataContext';


const CreateSession = () => {
    const [value, setValue] = useState(dayjs(Date.now()));
    const initialState = { title: "", topic: "", location: "", description: "" }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(DataContext)
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
            title: formData.title,
            topic: formData.topic,
            location: formData.location,
            description: formData.description,
            maximum: 10,
            counselor_profile_id: user.user.counselor_profile[0].id
        }

        createSession(post, setIsLoading)

    }
    return (
        <div className='container p-4'>
            <h5 style={{ color: "#143E35" }}>Create A Session</h5>
            <hr className="light mb-5 mt-3" />

            <Card className='p-5'>
                <form onSubmit={onSubmit} >
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Topic</label>
                        <input onChange={handleEventChange} name='topic' required type="text" className="form-control" id="exampleFormControlInput1" placeholder="session topic" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input onChange={handleEventChange} name='title' required type="text" className="form-control" id="exampleFormControlInput1" placeholder="session title" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Location</label>
                        <input onChange={handleEventChange} name='location' required type="text" className="form-control" id="exampleFormControlInput1" placeholder="session location" />
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
                        <textarea onChange={handleEventChange} name="description" required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-success" disabled={isLoading ? true : false}>Create</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default CreateSession