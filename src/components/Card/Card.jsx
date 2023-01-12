import React from 'react'

import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Card = (props) => {
  return (
  <AnimateSharedLayout>
    <CompactCard param = {props}/>

  </AnimateSharedLayout>
  )
}

function CompactCard ({param}){
    return(
        <div className='CompactCard'
        style={{
            background : param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        >
            <div className='radialBar'>
                <CircularProgressbar
                value={param.barValue}
                text={`{param.barValue}%`}
                />
            </div>
            <div className='detail'>
                <span>{param.value}</span>
                <span>Last 24 hours</span>
            </div>

        </div>
    )
}

export default Card