import React from "react";
import styled from "styled-components";
import BG1 from "../../assets/bg/bg_carousel1.png";
import BBCLogo from "../../assets/official logo.png";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Button } from "../../components/Button";
import { H1, Heading, Text } from "../../components/Text";
import AppCarousel from "../../components/Carousel";
import { MediaGroup } from "./fetchImage";

const CarouselRenderer = () => {
  const item1 = () => {
    return (
      <Container>
        <Wrapper>
          <LogoWrapper>
            <LogoImage alt="bbc-logo" src={BBCLogo} />
            <BBCText color="#fff" className="logo-subtitle" bold>
              BICOL BLOCKCHAIN CONFERENCE
            </BBCText>
          </LogoWrapper>
          <TextWrapper>
            <Text
              color="rgba(255,255,255,0.5)"
              fontSize="2em"
              style={{ textAlign: "left", marginTop: "1.3rem" }}
            >
              The biggest gathering of blockchain enthusiasts, <br /> crypto
              curious, influencers, and experts <br /> in south of the metro.
            </Text>
          </TextWrapper>
          <RegisterDiv>
          <a href="https://www.eventbrite.com/e/bicol-blockchain-conference-tickets-440189066347" target="_blank" style={{textDecoration: 'none', color:'inherit'}}>
            <Button
              bgcolor="#fff"
              color="rgb(0,0,0)"
            >
              <Heading>REGISTER HERE</Heading>
            </Button>
            </a>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              EVENT IS FREE! LIMITED SLOTS ONLY.
            </Text>
          </RegisterDiv>
        </Wrapper>
        <Wrapper>
          <DetailsContainer>
            <TextWrapper>
              <Heading color="#fff" fontSize="4em">
                14 NOV 2022
              </Heading>
              <Heading color="#fff" fontSize="3em">
                CASA BLANCA HOTEL
              </Heading>
              <Text color="rgba(255,255,255,0.5)" fontSize="2em">
                LEGAZPI CITY, ALBAY
              </Text>
            </TextWrapper>
            <div>
              <DivShowCase>
                <Text color="#fff" fontSize="1.5em">
                  Media Partners:
                </Text>
                <MediaDiv>
                  <Media alt="icn" src={MediaGroup.BLKTides} size="20px" />
                  <Media alt="icn" src={MediaGroup.BitPinas} size="40px" />
                  <Media alt="icn" src={MediaGroup.AsiaTokenFund} size="40px" />
                  <Media alt="icn" src={MediaGroup.CoinVoice} size="40px" />
                </MediaDiv>
              </DivShowCase>
              <DivShowCase>
                <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
                  Organized and Co-presented by:
                </Text>
                <MediaDiv>
                  <Media alt="icn" src={MediaGroup.Ownly} size="80px" />
                  <Media alt="icn" src={MediaGroup.SRK} size="80px" />
                  <Media alt="icn" src={MediaGroup.DTI} size="50px" />
                </MediaDiv>
              </DivShowCase>
            </div>
          </DetailsContainer>
        </Wrapper>
      </Container>
    );
  };

  return <AppCarousel components={{ item1 }} />;
};

export default CarouselRenderer;

const RegisterDiv = styled.div`
  text-align: left;
  
  & > a > ${Button} {
    border-radius: 10px;
    padding: 10px;
    width: 200px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 750px) {
    text-align: left;
    & > a > ${Button} {
      padding: 15px;
      width: 230px;
      height: 60px;
      border-radius: 25px;
    }
  }
  
`

const BBCText = styled(Text)`
  font-size: 2.6em;

  @media screen and (min-width: 1476px) {
    font-size: 2.8em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 2.9em;
  }
`;

const Container = styled(ContainerWithBackground)`
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 670px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 2.5rem 2.5rem;
  }
`;

const FontResponsive = styled.div`
  font-size: 5px;

  @media screen and (min-width: 350px) {
    font-size: 6px;
  }

  @media screen and (min-width: 750px) {
    font-size: 5px;
  }

  @media screen and (min-width: 970px) {
    font-size: 7.8px;
  }

  @media screen and (min-width: 1360px) {
    font-size: 13px;
  }
`;

const Wrapper = styled(FontResponsive)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 45vh;
  & > button {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }

  @media screen and (min-width: 750px) {
    align-items: flex-start;
    justify-content: space-between
    padding: 2.5rem;
    min-height: 5vh;
  }

  @media screen and (min-width: 970px) {
    padding: 1.5rem 3rem 0rem 3rem;
    width: ${props => props.width};
  }

  @media screen and (min-width: 2000px) {
    & > * {
      margin-top: 5rem;
    }
  }
`;

const LogoImage = styled.img`
  width: 280px !important;

  @media screen and (min-width: 420px) {
    width: 300px !important;
  }

  @media screen and (min-width: 970px) {
    width: 400px !important;
  }

  @media screen and (min-width: 1360px) {
    width: 600px !important;
  }

  @media screen and (min-width: 1460px) {
    width: 650px !important;
  }
`;

const LogoWrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled(FontResponsive)`
  text-align: left;
  margin-bottom: 2rem;
`;

const DivShowCase = styled(FontResponsive)`
  width: 100%;
  padding: 1rem 0;
`;
const MediaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Media = styled.img`
  width: ${(props) => props.size ?? "55px"} !important;

  @media screen and (min-width: 1366px) {
    width: ${(props) => `calc(${props.size} + 25px)`}!important;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
