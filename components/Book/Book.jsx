import React from 'react';
import styled from 'styled-components';
import Rocket from '../../assets/rocket.png';
import Juice from '../../assets/juice.png';
import Moon from '../../assets/moon.png';
import Suite from '../../assets/suite.png';
import Need from '../../assets/need.png';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
`;

const Card = styled.div`
  padding-top: 32px;
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(66, 66, 66, 0.25) 0%, rgba(66, 66, 66, 0.1) 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
`;

const H1 = styled.h1`
  color: #ffffff;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const JuiceContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const JuiceImage = styled.img`
  width: 100%; /* Adjust size as needed */
  height: auto;
`;

const TopLeftImage = styled.img`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 12vw; // Responsive width based on viewport width
  min-width: 130px; // Minimum size
  max-width: 300px; // Maximum size
  height: auto;
`;

const CenterImage = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15vw; // Slightly larger than other images
  min-width: 130px;
  max-width: 300px;
  height: auto;
`;

const TopRightImage = styled.img`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 12vw;
  min-width: 130px;
  max-width: 300px;
  height: auto;
`;

const Book = () => {
  return (
    <PageWrapper>
      <Card>
        <H1>$NIGGACHU'S BOOK</H1>
        <Container>
          <TopLeftImage src={Rocket} alt="Rocket" />
          <CenterImage src={Moon} alt="Moon" />
          <TopRightImage src={Suite} alt="Suite" />
          <TopLeftImage 
            src={Need} 
            alt="Need" 
            style={{ 
              top: '30%', 
              left: '5%',
              width: '12vw',
              minWidth: '130px',
              maxWidth: '300px'
            }} 
          />
          <JuiceContainer>
            <JuiceImage src={Juice} alt="Juice" />
          </JuiceContainer>
        </Container>
      </Card>
    </PageWrapper>
  );
};

export default Book;