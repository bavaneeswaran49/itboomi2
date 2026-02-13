import React from 'react';
import styled from 'styled-components';

const Pricingp = styled.p`
  font-size:15px;
  font-family: 'Work Sans', sans-serif;
  display:flex;
  justify-content:center;
  color:#303030;
  font-weight:400;
  letter-spacing:0.5px;
  margin-bottom:clamp(5px,1vh,10px);
`;

const H1 = styled.h1`
  font-family:'Playfair Display';
  display:flex;
  justify-content:center;
  color:#303030;
  font-size: clamp(25px, 4vw, 55px);
  font-weight:800;
  padding-bottom: clamp(15px,5vh,25px);
`;

const Span = styled.h1`
  font-family:'Playfair Display';
  display:flex;
  justify-content:center;
  color:#303030;
  font-size: clamp(25px, 4vw, 55px);
  font-weight:400;
  padding-left:5px;
`;

const F1 = styled.div`
  width:100%;
  height:100%;
  background-color:rgb(255, 222, 130);
  padding:30px 30px;
  border-radius:30px;
`;

const F3 = styled.div`
  width:100%;
  height:100%;
  background-color:#f7f7f7;
  padding:30px 30px;
  border-radius:30px;
`;

const F2 = styled.div`
  margin-top:15px;
`;

const Cardtitle = styled.h1`
  font-family: 'Playfair';
  font-weight:400;
  display:flex;
  justify-content:center;
  color: #303030;
`;

const Ppara = styled.p`
  font-size:15px;
  font-family: 'Work Sans', sans-serif;
  display:flex;
  justify-content:center;
  color:#303030;
  font-weight:400;
  letter-spacing:0.5px;
  margin:0px;
  padding:clamp(7px,1vh,15px);
`;

const Parain = styled.h3`
  display:flex;
  justify-content:center;
  color:#303030;
  padding-bottom:clamp(10px,3vh,15px);
  padding-top:clamp(5px,2vh,10px);
  font-size:clamp(20px,3rem,40px);
`;

const Button = styled.button`
  background-color: #303030;
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  border: none;
  display:flex;
  justify-content:center;
  font-family: 'Work Sans', sans-serif;

`;

const Mo = styled.h3`
  font-family:"Playfair";
  font-size: 40px;
`;

const Pricing = () => {
  return (
    <div className='container pricing'>
      <Pricingp>PRICING</Pricingp>
      <H1>
        <b><i>Plans</i></b>
        <Span>That Fit You</Span>
      </H1>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <F2>
            <F3>
              <Cardtitle>Starter</Cardtitle>
              <Ppara>Perfect for trying things out.</Ppara>
              <Parain><em className='em'>€49</em><Mo>/mo</Mo></Parain>
              <Ppara>2 group sessions/month</Ppara>
              <Ppara>Community access</Ppara>
              <Ppara>Session summaries</Ppara>
              <Ppara>Private messaging</Ppara>
              <Ppara>Early event access</Ppara>
              <Ppara><Button>Join Now</Button></Ppara>
            </F3>
          </F2>
        </div>
        <div className='col-lg-4 col-md-6'>
          <F2>
            <F1>
              <Cardtitle>Growth</Cardtitle>
              <Pricingp>Our most popular membership.</Pricingp>
              <Parain><em className='em'>€89</em><Mo>/mo</Mo></Parain>
              <Ppara>Weekly group sessions</Ppara>
              <Ppara>Goal-tracking tools</Ppara>
              <Ppara>Full community access</Ppara>
              <Ppara>Access to recordings</Ppara>
              <Ppara>Priority support</Ppara>
              <Ppara><Button>Start Growing</Button></Ppara>
            </F1>
          </F2>
        </div>
        <div className='col-lg-4 col-md-6'>
          <F2>
            <F3>
              <Cardtitle>Circle+</Cardtitle>
              <Pricingp>For full support & 1:1 coaching</Pricingp>
              <Parain><em className='em'>€149</em><Mo>/mo</Mo></Parain>
              <Ppara>Everything in Growth</Ppara>
              <Ppara>Monthly 1:1 coaching</Ppara>
              <Ppara>Personalized session recaps</Ppara>
              <Ppara>VIP Q&A calls</Ppara>
              <Ppara>Early event access</Ppara>
              <Ppara><Button>Join Circle+</Button></Ppara>
            </F3>
          </F2>
        </div>
      </div>
    </div>
  )
};

export default Pricing;
