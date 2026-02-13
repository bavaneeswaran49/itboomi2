// import React from 'react'
// import styled from 'styled-components'
// import img1 from '../assets/card1.png'
// import img2 from '../assets/card2.png'
// import img3 from '../assets/card3.png'
// import img4 from '../assets/card4.png'
// import { AiFillLinkedin } from "react-icons/ai";

// export const Guide = () => {

//     const H1 = styled.h1`
//       font-family:'Playfair Display';
//       color:#303030;
//       font-size: clamp(25px, 4vw, 55px);
//       font-weight:400;
//       padding-bottom: clamp(15px,5vh,25px);
//       display:flex;
//       justify-content:center;
//     `;

//     const P = styled.p`
//         color:#303030;
//         font-weight:400;
//         font-size:clamp(10px,1rem,16px);
//         margin-top:clamp(10px,1vh,15px);
//         display:flex;
//         justify-content:center;
//     `

//     const Img = styled.img`
//         height:240px;
//         width:100%;
//         border-radius:20px;
//         filter: grayscale(100%);
//     `

//     const CardWrapper = styled.div`
//         margin-top:15px;
//         width:100%;
//         display:flex;
//         flex-direction:column;
//         align-items:center;
//     `

//     const ImageWrapper = styled.div`
//         background-color:#DDDDDD;
//         width:85%;
//         border-radius:20px;
//         overflow:hidden;
//     `

//     const Content = styled.div`
//          width:85%;
//          text-align:center;
//          margin-top:15px;
//     `

//     const Cardh1 = styled.h2`
//         font-family:'Playfair Display';
//         font-weight:400;
//         font-size:clamp(18px,3vw,28px);
//         color:#303030;
//         padding-top:10px;
//         padding-bottom:5px;
//     `

//     const Pp = styled.p`
//         color:#303030;
//         font-weight:400;
//         font-size:clamp(10px,1rem,16px);
//     `

//     const Icon = styled.div`
//         margin-top:10px;
//         font-size:22px;
//         cursor:pointer;
//     `
//     const Contentwrap=styled.div`
//         display: flex;
//         justify-content: start;
//     `

//     return (
//         <div className='container guide'>
//             <P>Your Hosts & Guides</P>
//             <H1>Meet Your Facilitators</H1>

//             <div className='row'>
//                 {[img1, img2, img3, img4].map((img, index) => (
//                     <div key={index} className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
//                         <CardWrapper>
//                             <ImageWrapper>
//                                 <Img src={img} alt="guide" />
//                             </ImageWrapper>
//                             <Contentwrap>
//                                 <Content>
//                                     <Cardh1>Amira Sullivan</Cardh1>
//                                     <Pp>Creative Strategist & Group Facilitator</Pp>
//                                     <Pp>
//                                         With over a decade of guiding creative professionals,
//                                         Amira brings clarity, structure, and a spark of inspiration to every session.
//                                     </Pp>

//                                     <Icon>
//                                         <AiFillLinkedin />
//                                     </Icon>
//                                 </Content>
//                             </Contentwrap>
//                         </CardWrapper>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Guide;
import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/card1.png'
import img2 from '../assets/card2.png'
import img3 from '../assets/card3.png'
import img4 from '../assets/card4.png'
import { AiFillLinkedin } from "react-icons/ai";

const Guide = () => {

    const H1 = styled.h1`
      font-family:'Playfair Display';
      color:#303030;
      font-size: clamp(25px, 4vw, 55px);
      font-weight:400;
      padding-bottom: clamp(15px,5vh,25px);
      display:flex;
      justify-content:center;
    `;

    const P = styled.p`
        color:#303030;
        font-weight:400;
        font-size:clamp(10px,1rem,16px);
        margin-top:clamp(10px,1vh,15px);
        display:flex;
        justify-content:center;
    `

    const Img = styled.img`
        height:240px;
        width:100%;
        border-radius:20px;
        filter: grayscale(100%);
        object-fit: cover;
    `

    const CardWrapper = styled.div`
        margin-top:15px;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
    `

    const ImageWrapper = styled.div`
        background-color:#DDDDDD;
        width:100%;
        border-radius:20px;
        overflow:hidden;
    `

    const Content = styled.div`
         width:100%;
         margin-top:15px;
         text-align:left;
         align-self:flex-start;
    `

    const Cardh1 = styled.h2`
        font-family:'Playfair Display';
        font-weight:400;
        font-size:clamp(18px,3vw,28px);
        color:#303030;
        padding-top:10px;
        padding-bottom:5px;
    `

    const Pp = styled.p`
        color:#303030;
        font-weight:400;
        font-size:clamp(10px,1rem,16px);
        margin-bottom:8px;
    `

    const Icon = styled.div`
        margin-top:10px;
        font-size:22px;
        cursor:pointer;
    `

    return (
        <div className='container guide'>
            <P>Your Hosts & Guides</P>
            <H1>Meet Your Facilitators</H1>

            <div className='row'>
                {[img1, img2, img3, img4].map((img, index) => (
                    <div key={index} className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
                        <CardWrapper>
                            <ImageWrapper>
                                <Img src={img} alt="guide" />
                            </ImageWrapper>

                            <Content>
                                <Cardh1>Amira Sullivan</Cardh1>
                                <Pp>Creative Strategist & Group Facilitator</Pp>
                                <Pp>
                                    With over a decade of guiding creative professionals,
                                    Amira brings clarity, structure, and a spark of inspiration to every session.
                                </Pp>

                                <Icon>
                                    <AiFillLinkedin />
                                </Icon>
                            </Content>
                        </CardWrapper>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Guide;
