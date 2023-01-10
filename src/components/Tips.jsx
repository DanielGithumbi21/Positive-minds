import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Tips() {
    return (
        <StyledDiv>
            <div className='content'>

                <div className='section-a'>
                    <div className='sec'>
                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>
                        <div>
                            <h3>Find Empathy</h3>
                            <p>Vetted expert facilitators with you
                                every step of the way
                            </p>
                        </div >
                    </div>

                    <div className='sec'>
                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>

                        <div>
                            <h3>Someone's always there</h3>
                            <p>Daily drop-in anonymous convos within
                                the community</p>
                        </div>
                    </div>

                    <div className='sec'>

                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>
                        <div>
                            <h3>Simple and convinient</h3>
                            <p>Daily drop-in anonymous convos
                                within the community</p>
                        </div>
                    </div>
                </div>




                <div className='section-b'>
                    <div className='sec'>
                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>
                        <div>
                            <h3>Proffesional guidance</h3>
                            <p>Vetted expert facilitators with you
                                every step of the way</p>
                        </div>
                    </div>

                    <div className='sec'>
                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>
                        <div>
                            <h3>Tools to help you grow</h3>
                            <p>Build resilience with personalized
                                self-help exercises</p>
                        </div>
                    </div>

                    <div className='sec'>
                        <div className='icon-a'>
                            <FontAwesomeIcon icon={faCheck} size={"lg"} />
                        </div>
                        <div>
                            <h3>Affordable</h3>
                            <p>All our services are completely
                                free</p>
                        </div>
                    </div>
                </div>
            </div>


        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    margin: 50px 0;
    width: 90%;
    margin-inline: auto;
    display:flex;
    border-radius: 20px;
    .content{
        justify-content: space-between;
        display: flex;
        gap: 30%;
        margin-inline: auto;
    }
    .section-a{
        height: 400px;
        
    }
    
        .section-b{
        padding: 0;
        height: 400px;
        
        
    }

p{
    font-size: 20px;
}
    

.sec{
    display: flex;
    padding-bottom: 50px;
    & h3, & p{
            font-size: 22px;
        }
        & p{
            color: #43806C;
        }& h3{
            color: #143E35;

        }
}
.icon-a{
    margin-right: 20px;
    padding: 16px;
    border-radius: 50%;
    color: #fff;
    background: #143E35;
    align-self: center;

}


`


