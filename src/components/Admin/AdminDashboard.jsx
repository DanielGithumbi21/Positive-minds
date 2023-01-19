import { Card, Container } from '@mui/material'
import { Chart as ChartJS, registerables } from "chart.js";
import React, { useEffect, useState } from 'react'
import { getSessions } from '../../Data/users/counsellors';
import { getCounselorProfile } from '../../Data/users/users';
import CircularProgress from '@mui/material/CircularProgress';
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import {
  BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
ChartJS.register(...registerables);

const Admin = () => {
  const [sessions, setSessions] = useState([])
  const [counsellors, setCounsellors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getSessions(setIsLoading)
      .then((data) => setSessions(data))
    getCounselorProfile(setIsLoading)
      .then((data) => setCounsellors(data))
  }, [])

  const usersData = [
    {
      name: "users",
      total: "9"
    },
    {
      name: "Counsellors",
      total: counsellors.length
    }
  ]
  const sessionsData = [
    {
      name: "Appointments",
      total: "9"
    },
    {
      name: "Sessions",
      total: sessions.length
    }
  ]
  return (

    <React.Fragment>
      {
        isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
          <Container sx={{
            padding: "20px"
          }}>
            <div className="row padding">
              <div className="col-lg-3">
                <Card sx={{
                  padding: "10px",
                  backgroundColor: "#143E35",
                  color: "white",
                  height: "110px",
                  marginBottom: "10px"
                }}>
                  <div className="container mb-3">
                    <div className="row padding">
                      <div className="col-lg-10">
                        <h6 className='mt-3 mb-3'>Users</h6>
                        <div className="text-center">
                          <h4 className='mb-2 mt-4'>9</h4>
                        </div>

                      </div>
                      <div className="col-lg-2">
                        <PersonIcon sx={{
                          color: "#E59438",
                          marginTop: "10px",

                        }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-3">
                <Card sx={{
                  padding: "10px",
                  backgroundColor: "#143E35",
                  color: "white",
                  height: "110px",
                  marginBottom: "10px"
                }}>
                  <div className="container mb-3">
                    <div className="row padding">
                      <div className="col-lg-10">
                        <h6 className='mt-3 mb-3'>Counsellors</h6>

                        <div className="text-center">
                          <h4 className='mb-2 mt-4'>{counsellors.length}</h4>
                        </div>


                      </div>
                      <div className="col-lg-2">
                        <PersonIcon sx={{
                          color: "#E59438",
                          marginTop: "10px",

                        }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-3">
                <Card sx={{
                  padding: "10px",
                  backgroundColor: "#143E35",
                  color: "white",
                  height: "110px",
                  marginBottom: "10px"
                }}>
                  <div className="container mb-3">
                    <div className="row padding">
                      <div className="col-lg-10">
                        <h6 className='mt-3 mb-3'>Sessions</h6>

                        <div className="text-center">
                          <h4 className='mb-2 mt-4'>{sessions.length}</h4>
                        </div>

                      </div>
                      <div className="col-lg-2">
                        <BookOnlineIcon sx={{
                          color: "#E59438",
                          marginTop: "10px",

                        }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-3">
                <Card sx={{
                  padding: "10px",
                  backgroundColor: "#143E35",
                  color: "white",
                  height: "110px",
                  marginBottom: "10px"
                }}>
                  <div className="container mb-3">
                    <div className="row padding">
                      <div className="col-lg-10">
                        <h6 className='mt-3 mb-3'>Appointments</h6>

                        <div className="text-center">
                          <h4 className='mb-2 mt-4'>9</h4>
                        </div>

                      </div>
                      <div className="col-lg-2">
                        <BookOnlineIcon sx={{
                          color: "#E59438",
                          marginTop: "10px",

                        }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="container charts ">
              <div className="row padding">
                <div className="col-lg-6 col-sm-12">
                  <Card className=" new-card p-4 mt-5 mb-3">
                    <h6 className="text-center mb-3" style={{ fontWeight: '600' }}>Users and Counsellors</h6>
                    <ResponsiveContainer width="95%" height={400}>
                      <BarChart
                        data={usersData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="1 6" />
                        <XAxis dataKey={`name`} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" barSize={20} fill='#143E35' />
                      </BarChart>
                    </ResponsiveContainer>

                  </Card>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Card className="p-4 mt-5 mb-3">
                    <h6 className="text-center mb-3" style={{ fontWeight: '600' }}>Sessions and Appointments</h6>
                    <ResponsiveContainer width="95%" height={400}>
                      <ComposedChart
                        data={sessionsData}
                        layout="vertical"
                        margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}
                      >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" barSize={20} fill='#143E35' />
                      </ComposedChart>
                    </ResponsiveContainer>

                  </Card>
                </div>
              </div>
            </div>

          </Container>

      }
    </React.Fragment>

  )
}

export default Admin
