import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaFacebookMessenger } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #303030;
  color: white;
  padding: clamp(35px, 3vw, 50px) clamp(20px,4vw,50px);
  border-radius: 50px;
`;

const H1 = styled.h1`
  font-family: 'Playfair';
  font-weight: 700;
  font-size: clamp(20px, 4vw, 40px);
  margin-bottom: 20px;
`;

const Footerp = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0.7px;
  font-size: 15px;
`;

const IconMain = styled.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 16px);
  padding-top: 10px;
`;

const Icon = styled.div`
  font-size: 20px;
  color: #FFDD81;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const FooterColumns = styled.div`
  display: flex;
  gap: clamp(20px, 10vw, 120px);
`;

const Copy = styled.p`
  margin-top: 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0.7px;
  font-size: 15px;
`;

const Yellow = styled.div`
  background-color: #ffdd81;
  padding: clamp(10px, 4vw, 30px);
  border-radius: 20px;
  color: black;
`;

const YellowTitle = styled.h1`
  font-size: clamp(20px, 5vw, 40px);
  font-family: 'Playfair';
  font-weight: 400;
  color: #303030;
  padding-bottom: clamp(15px, 3vw, 10px);
`;

const Button = styled.button`
  background-color: #303030;
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  border: none;
`;

const Footer2p = styled.p`
  margin: 0;
  padding-bottom: clamp(10px,3rem,15px);
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0.7px;
  font-size: 15px;
  color: #303030;
`;


const Footer = () => {
  return (
    <div className="container footer">
      <FooterWrapper>
        <H1>alliatus</H1>

        <div className="row">

          <div className="col-lg-6">
            <FooterColumns>
              <div>
                <Footerp>Home</Footerp>
                <Footerp>About</Footerp>
                <Footerp>How It Works</Footerp>
                <Footerp>Member Stories</Footerp>
                <Footerp>Events</Footerp>

                <IconMain>
                  <Icon><FaFacebook /></Icon>
                  <Icon><FaLinkedin /></Icon>
                  <Icon><FaFacebookMessenger /></Icon>
                  <Icon><FaInstagramSquare /></Icon>
                </IconMain>
              </div>

              <div>
                <Footerp>FAQ</Footerp>
                <Footerp>Contact</Footerp>
                <Footerp>Privacy Policy</Footerp>
                <Footerp>Terms of Service</Footerp>
              </div>
            </FooterColumns>

            <Copy>
              © 2025 Alliatus. All rights reserved.
              <br />
              Powered by connection, clarity, and community.
            </Copy>
          </div>


          <div className="col-lg-6">
            <Yellow>
              <YellowTitle>
                Let's Get <em><b>Started!</b></em>
              </YellowTitle>

              <Footer2p>
                Join a supportive circle of minds and start growing with<br /> intention.
              </Footer2p>
              <Footer2p>
                There's a seat at the table waiting for you
              </Footer2p>
              <Button>Join Alliatus</Button>
            </Yellow>
          </div>
        </div>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
