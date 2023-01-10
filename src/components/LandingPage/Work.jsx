import React from 'react'
import styled from 'styled-components'

export default function Work() {
  return (
    <StyledDiv>
      <div>
        <p>Are you a Proffesional Therapist? Work with us!</p>
        <button>Get Started Here</button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
padding-top: 40px;
align-items: center;
text-align: center;
width: 80%;
margin: auto;
margin-bottom: 50px;
p{
  font-size:90px;
  color:#43806C ;
  padding-bottom: 50px;
  //position: absolute;

font-weight: 400;
font-size: 90px;
line-height: 123px;
text-align: center;
color: #43806C;

}
button{
  box-sizing: border-box;
  font-size: 24px;
  color: white;

//position: absolute;
width: 486px;
height: 90px;
left: 513px;
top: 2702px;

background: #143E35;
border: 2px solid #143E35;
}

`
