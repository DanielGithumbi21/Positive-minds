import { Card } from '@mui/material'
import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import { beTherapist } from '../../Data/users/users'
import { useNavigate } from 'react-router'
import AlertDialog from './Dialog'

const BeTherapist = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ specialization: "", bio: "", experience: "" })
  const { user } = useContext(DataContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleClose = () => {
    setOpen(false)
    navigate("/client")
  }
  const handleGoHome = () => {
    setOpen(false)
    navigate("/client")
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const post = {
      specialization: formData.specialization,
      experience: formData.experience,
      bio: formData.bio,
      user_id: user.user.id
    }
    beTherapist(post, setOpen)

  }
  return (
    <React.Fragment>
      <div className="container-fluid p-4">
        {
          open ? <AlertDialog open={open} handleClose={handleClose} handleClickHome={handleGoHome} /> : ""
        }
        <h5 style={{ color: "#143E35" }}>Become A Therapist</h5>
        <hr className="light mb-5 mt-3" />

        <Card className='p-3'>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Specialization</label>
              <input onChange={handleChange} name='specialization' required type="text" className="form-control" id="exampleFormControlInput1" placeholder="peer groups" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Experience</label>
              <textarea onChange={handleChange} required name="experience" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Bio</label>
              <textarea onChange={handleChange} name="bio" required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-success">Submit</button>
            </div>
          </form>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default BeTherapist