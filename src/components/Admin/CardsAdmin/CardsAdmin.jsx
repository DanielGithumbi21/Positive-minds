// import { Card } from '@mui/material'
import React from 'react'
import { CardsData } from './AdminData'
import Card from '../Card/Card'
import './Cardsadmin.css'
function CardsAdmin() {
  return (
    <div className='Cards'>
        {CardsData.map((card,id)=>{
            return(
                <div className='parentContainer'>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    />
                </div>
            )
        })}

    </div>
  )
}

export default CardsAdmin