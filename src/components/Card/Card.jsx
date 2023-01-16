import React from 'react'
import './CardAdmin.css'
import { LayoutGroup,motion } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
  return (
  <LayoutGroup>
    <CompactCard param = {props}/>

  </LayoutGroup>
  )
}

function CompactCard ({param}){
    return(
        <div className='compactCard'
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            >
            <div className='radialBar'>
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className='detail'>
                <span>{param.value}</span>
                <span>Last 24 hours</span>
            </div>

        </div>
    )
}

export default Card