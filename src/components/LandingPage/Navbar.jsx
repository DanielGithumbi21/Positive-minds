import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <StyledDiv>
            <div className='navbar'>

                <div>
                    <div className='logo'>
                        <Link to="/logo">Positive.Minds</Link>
                    </div>
                </div>

                <div className='links'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/councelors">Councelors</Link>
                    </li>
                    <li>
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    </li>
                    <li>
                        <button className='filler'>
                            <Link to="/find your group">Find your group</Link>
                        </button>
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
        font-size: 2.5rem;
        line-height: 54px;

    }

    .logo a{
        text-decoration:none;
        color:rgba(20, 62, 53, 1);
   
    }
    button{
        width: 220px;
        height: 60px;
        font-size:24px;
        font-weight: 500;
        border-radius: 15px;
        background:#fff;
        border: 2px solid rgba(20, 62, 53, 1);


    }

.filler{
    background:rgba(20, 62, 53, 1);
    color:white;
    a:last-child{
        color: #fff;
    }
    }
   
`