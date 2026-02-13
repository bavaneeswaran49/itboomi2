import React from 'react'
import Styled from 'styled-components'
import abt from '../assets/abt.jpg'
const Pricingpp = Styled.p`
  font-size:15px;
  font-family: 'Work Sans', sans-serif;
  display:flex;
  justify-content:center;
  color:#303030;
  font-weight:400;
  letter-spacing:0.5px;
  margin-bottom:clamp(10px,2vh,15px);
`;
const H1 = Styled.h1`
  font-family:'Playfair Display';
  display:flex;
  justify-content:center;
  color:#303030;
  font-size: clamp(25px, 4vw, 55px);
  font-weight:400;
  padding-bottom: clamp(15px,5vh,25px);
  width:100%;
`;
const Img = Styled.img`
    width:100%;
    height:650px;
    border-radius:20px;
    opacity:70%;
    background-color:black;
    filter: grayscale(200%);
     @media(max-width:768px){
        height:450px;
    }
`

const Secd = Styled.div`
    width:100%;
   
     @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`
const Secd1 = Styled.div`
    padding:clamp(10px,5vh,30px) clamp(10px,5vh,30px);
`
const Pdiv = Styled.div`
    background-color:rgb(247, 247, 247);
  font-family: 'Work Sans', sans-serif;
    padding:clamp(10px,3rem,30px)clamp(10px,3rem,30px);
    border-radius:24px;
        font-weight:400;
color:#303030;
     margin-top:clamp(7px,2rem,15px);
    font-size:clamp(10px,2rem,15px);
`
const Pdivv = Styled.div`
  font-family: 'Work Sans', sans-serif;
    padding:clamp(10px,3rem,30px)clamp(10px,3rem,30px);
    border-radius:24px;
    font-weight:400;
    font-size:clamp(10px,2rem,15px);
    color:#303030;
`
const Pdivmain = Styled.p`
        font-size:clamp(10px,2rem,15px);
        padding-bottom:clamp(3.5px,1vh,7px);
`
const About = () => {
    return (
        <>
            <Pricingpp>
                What is Alliatus?
            </Pricingpp>
            <H1>
                <em>Not </em> Your Typical  Networking Group.
            </H1>
            <div className='container about'>
                <div className='row gap-5'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <Img src={abt}></Img>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <Secd>
                            <Secd1>
                                <Pdivv>
                                    Alliatus is a curated mastermind platform that brings together motivated individuals in small groups for deep conversation, honest feedback, and collective accountability.
                                </Pdivv>
                                <Pdiv>
                                    <Pdivmain>
                                        Small, Handpicked Circles
                                    </Pdivmain>
                                    You’re matched with 5–6 people who are aligned with your stage, goals, and mindset.
                                </Pdiv>
                                <Pdiv>
                                    <Pdivmain>
                                        Small, Handpicked Circles
                                    </Pdivmain>
                                    No fluff. Get feedback, ask for help, and brainstorm challenges in structured calls.
                                </Pdiv>
                                <Pdiv>
                                    <Pdivmain>
                                        Small, Handpicked Circles
                                    </Pdivmain>
                                    Ongoing sessions to help you stay accountable, make bold moves, and reach goals faster.</Pdiv>
                            </Secd1>
                        </Secd>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;