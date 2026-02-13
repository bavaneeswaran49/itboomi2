import React from 'react'
import Styled from 'styled-components'
const Testimonial = () => {
    const Testp = Styled.p`
        color:#303030;
        font-weight:400;
        font-size:clamp(10px,1rem,16px);
        margin-top:clamp(10px,1vh,15px);
    `

    const H1 = Styled.h1`
        font-family:'Playfair Display';
        color:#303030;
        font-size: clamp(25px, 4vw, 55px);
        font-weight:400;
        padding-bottom: clamp(15px,5vh,25px);
        display:flex;
`;
    const Bgdiv = Styled.div`
        background-color:rgb(247, 247, 247);
        padding-bottom:25px;
        border-radius:20px;
`
    const Bgdiv2 = Styled.div`
        background-color:rgb(247, 247, 247);
        padding-bottom:10px;
`
    const Bgmaindiv = Styled.div`
        background-color:rgb(247, 247, 247);
        padding:30px 40px;
        border-radius:24px;
        margin-top:20px;
`
    return (
        <div className='container test'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div>
                        <Testp>
                            TESTIMONIALS
                        </Testp>
                        <H1>
                            What Our Members Are Saying
                        </H1>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <Bgmaindiv>
                        <Bgdiv>“I joined on a whim, but it’s become a constant in my growth.
                            Everyone brings such honest energy — I leave every session clearer and more focused.”</Bgdiv>
                        <Bgdiv2>— Taylor B. / Creative Coach</Bgdiv2>
                    </Bgmaindiv>
                </div>
                <div className='col-lg-4'>
                    <Bgmaindiv>
                        <Bgdiv>“I joined on a whim, but it’s become a constant in my growth.
                            Everyone brings such honest energy — I leave every session clearer and more focused.”</Bgdiv>
                        <Bgdiv2>— Taylor B. / Creative Coach</Bgdiv2>
                    </Bgmaindiv>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <Bgmaindiv>
                        <Bgdiv>“I joined on a whim, but it’s become a constant in my growth.
                            Everyone brings such honest energy — I leave every session clearer and more focused.”</Bgdiv>
                        <Bgdiv2>— Taylor B. / Creative Coach</Bgdiv2>
                    </Bgmaindiv>
                </div>
                <div className='col-lg-4'>
                    <Bgmaindiv>
                        <Bgdiv>“I joined on a whim, but it’s become a constant in my growth.
                            Everyone brings such honest energy — I leave every session clearer and more focused.”</Bgdiv>
                        <Bgdiv2>— Taylor B. / Creative Coach</Bgdiv2>
                    </Bgmaindiv>
                </div>
                <div className='col-lg-4'>
                    <Bgmaindiv>
                        <Bgdiv>“I joined on a whim, but it’s become a constant in my growth.
                            Everyone brings such honest energy — I leave every session clearer and more focused.”</Bgdiv>
                        <Bgdiv2>— Taylor B. / Creative Coach</Bgdiv2>
                    </Bgmaindiv>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;