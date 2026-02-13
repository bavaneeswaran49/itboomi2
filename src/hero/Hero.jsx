import styled from 'styled-components'
import { MdOutlineStar } from "react-icons/md";
import heroimg1 from '../assets/heroimg.jpg';
import star1 from '../assets/Star 4.png'

const Hero = () => {
     const Transition1=styled.button`
        padding: 10px 20px;
        border-radius:20px;
        background-color: white;
        transform: translate(300px,20px);
     `
    const Herodiv = styled.div`
        background-color:#FFDD81;
        padding: clamp(20px,5vw,75px);
        border-radius:20px;
        margin-top: 125px;
        height: 700px;

        @media (max-width:992px){
             height: 1050px;
        }        @media (max-width:431px){
             height: 950px;
        }
    `

    const H3 = styled.h3`
        font-family:'Playfair Display';
        font-weight:400;
        font-size:clamp(28px,4vw,48px);
        color:#303030;
        padding-bottom:20px;
        line-height:1.2;
    `

    const P = styled.p`
        font-size:16px;
        max-width:500px;
        padding-bottom:25px;
        color:#303030;
    `

    const Ppp = styled.p`
        font-size:15px;
        margin:0;
        color:#303030;
    `

    const Main = styled.div`
        display:flex;
        gap: 15px;
        padding-bottom:20px;
        flex-wrap:wrap;
    `

    const Button = styled.button`
        background-color:#303030;
        border-radius:10px;
        color:white;
        border:none;
        padding:10px 20px;
        cursor:pointer;
    `

    const Button1 = styled.button`
        border:1px solid black;
        padding:10px 20px;
        border-radius:10px;
        background-color:#FFDD81;
        cursor:pointer;
    `

    const ImageSection = styled.div`
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:40px;

        @media(min-width:992px){
            margin-top:0;
        }
    `

    const Border = styled.div`
    position:absolute;
    width:70%;
    height:100%;
    border:1px solid black;
    border-radius:20px;
    top:-20px;
    left:60px;

    @media(max-width:1025px){
        display:none;
    }
`

    const Star = styled.img`
    height:100px;
    width: 130px;
    transform:translate(575px,-625px);
    @media(max-width:1025px){
        display:none;
    }
`

    const Border1 = styled.div`
    position:absolute;
    width:clamp(150px, 30vw, 250px);
    height:clamp(130px, 25vw, 320px);
    border:1px solid black;
    border-radius:20px;
    bottom:-20px;
    right:50px;

    @media(max-width:1025px){
        display:none;
    }
`


    const IMG = styled.img`
        width:100%;
        max-width:380px;
        border-radius:20px;
        position:relative;
        z-index:1;
    `

    const Dborder = styled.div`
        border: 1px solid #303030;
        padding:20px 20px;
        border-radius: 10px;
    `
    const Dborderf = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const Dborderf2 = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Dborderf1 = styled.div`
       
    `
    const Dborderh1 = styled.h1`
         font-family:'Playfair Display';
         color:#303030;
         font-size: clamp(20px, 4vw, 35px);
         font-weight:800;
         padding-bottom: clamp(5px,3vh,15px);
         display:flex;
    `
    const Dborderp = styled.p`
          font-family: 'Work Sans', sans-serif;
          width: 75%;
          color: #303030;
          @media(max-width:991px){
                      width: 100%;
          }
     `

    return (
        <> <div className='container hero'>
            <Herodiv>
                <div className='row align-items-center'>

                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <H3>
                            <em>Level Up </em> with a Curated Mastermind Circle
                        </H3>
                        <P>
                            Alliatus connects ambitious people into small,
                            handpicked groups for honest feedback, strategy
                            sessions, and real accountability.
                        </P>
                        <Main>
                            <Button>Apply Now</Button>
                            <Button1>Learn How It Works</Button1>
                        </Main>
                        <Ppp><b>4.9 <MdOutlineStar /> average rating</b></Ppp>
                        <Ppp><i>Feedback from real members across sessions.</i></Ppp>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <ImageSection>
                            <Border />
                            <Border1 />
                            <IMG src={heroimg1} alt="hero" />
                        </ImageSection>
                    </div>
                    <Star src={star1}></Star>
                </div>
            </Herodiv>
        </div>
            <div className='container herodown'>
                <Dborder>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 '>
                            <Dborderf>
                                <Dborderf1><Dborderh1><i>82%</i></Dborderh1><Dborderp>of members say they gained clarity within the first 2 sessions</Dborderp></Dborderf1>
                                <Dborderf1><Dborderh1><i>93%</i></Dborderh1><Dborderp>report feeling more accountable</Dborderp></Dborderf1>
                            </Dborderf>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <Dborderf2> <Dborderf1><Dborderh1><i>6</i></Dborderh1><Dborderp>6-person circles. The sweet spot for focused, diverse conversations.</Dborderp></Dborderf1></Dborderf2>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <Dborderf>
                                <Dborderf1><Dborderh1><i>1200+</i></Dborderh1><Dborderp>hours of mastermind sessions hosted</Dborderp></Dborderf1>
                                <Dborderf1><Dborderh1><i>75%</i></Dborderh1><Dborderp>return for a second cycle</Dborderp></Dborderf1>
                            </Dborderf>
                        </div>
                    </div>
                </Dborder>
            </div>
           
        </>
    )
}

export default Hero;
