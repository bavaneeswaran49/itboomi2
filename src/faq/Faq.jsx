import React from 'react'
import Faqimg from '../assets/faq.png'
import Styled from 'styled-components'
import { IoArrowUpOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

const Faqtitle = Styled.h1`
  font-family:'Playfair Display';
  color:#303030;
  font-size: clamp(25px, 5vw, 65px);
  font-weight:400;
  padding-bottom: clamp(15px,5vh,25px);
`;

const Upp = Styled.p`
  font-size:15px;
  font-family: 'Work Sans', sans-serif;
  color:#303030;
  font-weight:400;
  letter-spacing:0.5px;
  margin-bottom:clamp(5px,1vh,10px);
`;

const IMG = Styled.img`
  height:clamp(200px,100vh,410px);
  width:100%;
`;

const Divyell = Styled.div`
  background-color:#FFDD81;
  border-radius:20px;
  padding:50px;
`;

const Fpara = Styled.p`
  font-size:13px;
  word-spacing:1px;
  font-weight:500;
  font-family:'Work Sans', sans-serif;
  color:#303030;
`;
const Fparad = Styled.p`
    font-size:14px;
    color:#303030;
    width:70%;
    word-spacing:2px;
    font-weight:400;
    font-family:'Work Sans', sans-serif;
    color:#303030;
    @media (max-width:769px){
        width:90%;
    }
     @media (max-width:420px){
        width:100%;
    }
`
const Fqd = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;


const Ficon = Styled.div`
  cursor:pointer;
  border:1px solid #303030;
  padding:2.5px 5px;
  border-radius:20px;
`;
const Ficonn = Styled.div`
  cursor:pointer;
  border:1px solid #303030;
  padding:2.5px 5px;
  border-radius:20px;
`;

const Black = Styled.div`
    border:1px solid black;
    padding:20px 50px;
    border-radius:20px;
    margin-top:20px;
`
const Black1 = Styled.div`
    display:flex;
    justify-content:space-between;
`
const Faq = () => {
    return (
        <div className='container faq'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Upp>NEED MORE INFO ?</Upp>
                    <Faqtitle>Frequently Asked Questions</Faqtitle>
                    <Divyell>
                        <Fqd>
                            <Fpara>HOW DO THE GROUP SESSIONS WORK?</Fpara>
                            <Ficon>
                                <IoArrowUpOutline />
                            </Ficon>
                        </Fqd>
                        <Fparad>Each session takes place on Zoom and follows a guided structure, including check-ins, goal sharing, and peer feedback. You’ll always know what to expect.</Fparad>
                    </Divyell>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <IMG src={Faqimg} alt="FAQ" />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Black>
                            <Black1>
                                <Fpara>CAN I JOIN  FROM ANYWHERE ?</Fpara>
                                <Ficonn>
                                    <FaArrowDown />
                                </Ficonn>
                            </Black1>
                        </Black>
                        <Black>
                            <Black1>
                                <Fpara>WHAT IF I CAN’T MAKE A LIVE SESSION ?</Fpara>
                                <Ficonn>
                                    <FaArrowDown />
                                </Ficonn>
                            </Black1>
                        </Black>
                    </div>
                    <div className='col-lg-6'>
                        <Black>
                            <Black1>
                                <Fpara>IS THERE A LONG-TERM COMMITMENT?</Fpara>
                                <Ficonn>
                                    <FaArrowDown />
                                </Ficonn>
                            </Black1>
                        </Black>
                        <Black>
                            <Black1>
                                <Fpara>WHO ARE THE OTHER MEMBER?</Fpara>
                                <Ficonn>
                                    <FaArrowDown />
                                </Ficonn>
                            </Black1>
                        </Black>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq;
