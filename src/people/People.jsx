import React from 'react'
import Styled from 'styled-components'
import img from '../assets/i1.png'
import img1 from '../assets/i2.png'
const People = () => {
    const H1 = Styled.h1`
      font-family:'Playfair Display';
      color:#303030;
      font-size: clamp(25px, 4vw, 55px);
      font-weight:400;
      padding-bottom: clamp(15px,5vh,25px);
      display:flex;
      justify-content:center;
    `;
    const P = Styled.p`
        color:#303030;
        font-weight:400;
        font-size:clamp(10px,1rem,16px);
        margin-top:clamp(10px,1vh,15px);
        display:flex;
        justify-content:center;

    `
    const Ycard = Styled.div`
        background-color:#FFDD81;
        border:1px solid black;
        border-radius:30px;
        padding:50px 30px;
    `
    const Yh3 = Styled.h3`
        font-family:'playfair';
        font-weight:400;
        padding-bottom:clamp(10px,5vh,30px);
    `
    const Div = Styled.div`
  font-family: 'Work Sans', sans-serif;
  border-radius:10px;
  border:1px solid black;
  background-color:white;
  padding:5px 20px;
  width:90%;
  padding:5px,10px;
  margin-bottom:10px;
    `
    const IMG = Styled.img`
        height:350px;
        width:100%;
    `
    const Wcard = Styled.div`
          border:1px solid black;
        border-radius:30px;
        padding:50px 30px;
        margin-top:10px;
    `
    const Para=Styled.p`
        font-size:clamp(10px,1rem,16px);
        margin:0px;
        padding:0px;
    `
    return (
        <>
            <P>WHO IT'S FOR</P>
            <H1>Made for People Like You</H1>
            <div className='container con'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Ycard>
                            <Yh3>This <em>Is for you </em>If...</Yh3>
                            <Div>
                               <Para> You’re an <b>entrepreneur</b>, <b>solopreneur</b>, or<b> freelancer</b></Para>
                            </Div>
                            <Div>
                                <Para>You crave honest <b>feedback </b>and outside perspective</Para>
                            </Div>
                            <Div>
                                <Para>You want to <b>help others </b>while <b>evolving yourself</b></Para>
                            </Div>
                            <Div>
                               <Para> You value<b> real conversations </b>over shallow networking</Para>
                            </Div>
                            <IMG src={img}></IMG>
                        </Ycard>
                    </div>
                    <div className='col-lg-6'>

                        <Wcard>
                            <Yh3>This <em>Not Is for you </em>If...</Yh3>
                            <IMG src={img1}></IMG>
                            <Div>
                                <Para>You’re just looking to promote your business</Para>
                            </Div>
                            <Div>
                                <Para>You can’t commit to regular attendance</Para>
                            </Div>
                            <Div>
                                <Para>You’re not open to giving or receiving feedback</Para>
                            </Div>
                            <Div>
                               <Para>You prefer passive learning to active participation</Para> 
                            </Div>

                        </Wcard>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default People;
