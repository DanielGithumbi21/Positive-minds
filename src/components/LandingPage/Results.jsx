import React from 'react'
import styled from 'styled-components'

export default function Results() {
  return (
    <StyledDiv>
      <h1>
        See life changing results
      </h1>

      <div className='cards'>
        <div className='card'>
          <h2>Michael</h2>
          <p>“Positive minds is time flexible and affordable
            and if it didn’t exist, I don’t know where I would go.
            I had looked into other places before positive minds
            and there really wasn’t any option like it.”</p>
        </div>

        <div className='card'>
          <h2>Patricia</h2>
          <p>“I joined  Positive Minds to work on myself and to heal.
            I’m learning so much at every session! The change I see not
            only in myself but in my fellow group members is abundantly
            encouraging and profoundly fulfilling. Group therapy with
            Positive minds is a powerful healing tool.”</p>
        </div>

        <div className='card'>
          <h2>Anastacia</h2>
          <p>“I joined  Positive Minds to work on myself and to heal.
            I’m learning so much at every session! The change I see not
            only in myself but in my fellow group members is abundantly
            encouraging and profoundly fulfilling. Group therapy with
            Positive minds is a powerful healing tool.”</p>
        </div>

      </div>


    </StyledDiv >
  )
}


const StyledDiv = styled.div`
//height: 500px;
background: #CBC3B6;
padding-top: 90px;
padding-bottom: 150px;
padding-left: 30px;
padding-right: 30px;
margin: 0 50;

.cards{
  display: flex;
  gap: 35px;
  justify-content: space-between;
}
h1{
  padding-bottom: 20px;
  text-align: center;
  color: #143E35;
  
}

h2{
  color: #143E35;


}

p{
  font-size: 24px;
  padding: 10px;
  color: #43806C;
}

.card{
  background: white;
  flex: 1;
  border-radius: 15px;
  padding: 20px;

}

@media (max-width:920px){
 .cards{
display:block;
}
 .card{
  margin-bottom: 35px;
 }   
}


`