import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <StyledDiv>
            <div className='navbar'>

                <div>
                    <div className='logo'>
                        <Link to="/">Positive Minds</Link>
                    </div>
                </div>

                <div className='links'>
                    <li>
                        <Link id='none' to="/client">Home</Link>
                    </li>

                    <li>
                        <Link id='none' to="/client">Counsellors</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <button className="btn btn-md btn-outline-success">Login</button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/login">
                            <button className="btn btn-success btn-md">Find Your Group</button>
                        </Link>
                    </li>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
        height:6.25rem;
        display:flex;
   

    .navbar{
        list-style:none;
        display:flex;
        height: inherit;
        align-items:center;
        justify-content:space-between;
        width:100%;

    }

    .links {
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:55%;
        padding-right:3rem;
        font-size:1.5rem;
        font-weight: 500;
         }
    .links a{
        text-decoration:none;
        color:rgba(20, 62, 53, 1);

    }

    .logo{
        padding-left:3rem;
        font-style: normal;
        font-weight: 600;
        font-size: 2.0rem;
        line-height: 54px;

    }

    .logo a{
        text-decoration:none;
        color:rgba(20, 62, 53, 1);
   
    }
    button{
        
        font-size:20px;
        font-weight: 500;
        border-radius: 15px;
        border: 2px solid rgba(20, 62, 53, 1);


    }

.filler{
    background:rgba(20, 62, 53, 1);
    color:white;
    a:last-child{
        color: #fff;
    }
    }
   
   @media (max-width: 920px) {
    height:5.25rem;

    .navbar{
        //display: block;
    }
    #none {
        display: none;
    }
    .logo{
        font-size: 1.4rem;
        margin-right: 10px;
        margin-right: 1px;
        padding-left: 1rem;
    }

    button{
   ;
        font-size:12px;
        font-weight: 400;
        border-radius: 15px;
        border: 2px solid rgba(20, 62, 53, 1);

    }
    .links{padding-right: 0.5rem;}

    #login{
        margin-right: 20px;
    }
   }
`