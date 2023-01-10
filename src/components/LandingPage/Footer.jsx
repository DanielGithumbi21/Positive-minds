import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <StyledLanding>
      <div className='socials'>
        <SocialIcon network="twitter" bgColor="#E59438" />
        <SocialIcon network="facebook" bgColor="#E59438" />
        <SocialIcon network="instagram" bgColor="#E59438" />
        <SocialIcon network="linkedin" bgColor="#E59438" />
      </div>
      <div className='main'>
        <div className='sec'>
          <h2>POSITIVE MINDS COUNCELLING</h2>
          <p>+254 700 000</p>
        </div>
        <div className='sec'>
          <h2>WHO WE ARE</h2>

          <ul>
            <li>Women's Therapy </li>
            <li>Men's Therapy </li>
            <li>Teens Therapy</li>
            <li>Couples Therapy</li>
          </ul>

        </div>
        <div className='sec'>
          <h2>WHAt WE DO</h2>

          <ul>
            <li>Anxiety Therapy </li>
            <li>Depression Therapy </li>
            <li>Grief Cpuncelling</li>
            <li>Marriage Coucelling</li>
            <li>Addiction Coucelling</li>
          </ul>

        </div>
      </div>
    </StyledLanding>
  )
}

const StyledLanding = styled.div`
background: #143E35;

margin: auto;
.socials{
  margin: 60px 0;
  text-align: center;

  & a{
    margin: 100px 20px 20px;
  }

}
.main{
  display: flex;
  justify-content: space-between;
  background: red;
  width: 70%;
}
.sec{
  margin: 20px;
  font-size: 2opx;
}

`
