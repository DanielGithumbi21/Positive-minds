import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material'



const SessionCard = ({ session }) => {
    const navigate = useNavigate()

  return (
    <div className="col-lg-4">
      <Card>
        <div className="container mb-3">
          <div className="row padding">
            <div className="col-lg-12">
              <h6 className='mt-3 mb-3'>{session.title}</h6>
              <h6 className='mb-2'>{session.time}</h6>
              <button className="btn btn-success btn-sm" onClick={() => navigate(`/session/${session.id}`)}>View</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SessionCard