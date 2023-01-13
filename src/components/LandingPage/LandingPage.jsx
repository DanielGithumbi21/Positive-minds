import React from 'react';
import styled from 'styled-components';
import image1 from "../../assets/image1.jpg"
import Navbar from './Navbar';
import Icons from './Icons';
import Tips from './Tips';
import Results from './Results';
import Work from './Work';
import Footer from './Footer';

export default function LandingPage() {
    return (
        <main>

            <Navbar />
            <HeroDiv style={{}}>
                <h1 className='landing-text'>Expert-Led Online Group Therapy for Everyone</h1>
                <p>Join an online therapy group, and be supported every step of the way.</p>
                <button>Get Started</button>
            </HeroDiv>

            <Icons />
            <Tips />
            <Results />
            <Work />
            <Footer />
        </main>
    )
}

const HeroDiv = styled.div`
    width: 100%;
    height: 825px;
    background: url(${image1}) center center / cover;

   

    .landing-text{
    position: absolute;
    width: 661px;
    height: 116px;
    left: 68px;
    top: 350px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;

    color: #143E35;

}

p{
    position: absolute;
    width: 486px;
    height: 117px;
    left: 78px;
    top: 490px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #143E35;

}

button{
    box-sizing: border-box;
    position: absolute;
    width: 212px;
    height: 60px;
    left: 67px;
    top: 628px;
    background: #143E35;
    border-radius: 15px;
    border: 2px solid rgba(20, 62, 53, 1);
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}

@media (max-width:920px){
    background: rgb(20,62,53,1);
    color: #FFFFFF;
    //align-items: center;
    .landing-text{

    font-family: 'Inter';
    color: #FFFFFF;

    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    top: 200px;
    line-height: 58px;
    //background:red;
    width: 25rem;
    height: 20vh;

    }

    p{
        font-family: 'Inter';
    
    height: 20vh;
    color: #fff;
    //background: orange;
    /* margin-top: 90px; */
    top: 400px;
    width: 25rem;
    line-height: 58px;
    margin-left: -10px;

    }

    button{
        /* margin-top: 130px; */
        bottom:0.5px;
        left: 68px;
        background: rgba(229,148,56,1);
        border-color: #FFFFFF;
    }

    
    
}
    
`
