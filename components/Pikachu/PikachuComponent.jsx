import React from 'react';
import styled from 'styled-components';
import pikachuImage from '../../assets/pikaPic.png';
import wingImage from '../../assets/left.png';
import Copy from '../../assets/copy.png';
const Container = styled.div`
  position: relative;
  text-align: center;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
`;

const Text = styled.h1`
  font-family: Impact;
  font-size: 12vw;
  font-weight: 400;
  line-height: 12vw;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-65%, -220%);
  z-index: 1;
  margin: 0;
`;

const TokenTextContainer = styled.div`
  background-color: white;
  padding: 16px;
  position: absolute;
  left: 87%;
  bottom: -5%;
  transform: translateY(0%) rotate(25deg);
  z-index: 5;
  border-radius: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 3px;
  }

  @media (max-width: 480px) {
    padding: 1px;
  }
`;

const TokenText = styled.div`
  font-family: Impact;
  font-size: 1vw;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

const CopyableText = styled.div`
  display: flex;
  align-items: center;
  font-family: monospace;
  background: #FFFFFF3D;
  font-size: 1.5vw;
  padding: 15px;
  font-weight: 500;
  text-align: center;
  color: #FFFFFF;
  backdrop-filter: blur(32px);
  border-radius: 32px;
  cursor: pointer;
  bottom: 20px;
  z-index: 4;
  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

const Img = styled.img`
  height: 2vw;
`;
const PikachuContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 40vw;
  height: 40vw;
`;

const Pikachu = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const Wing = styled.img`
  position: absolute;
  width: 50vw;
  height: 50vw;
  top: 60%;
  transform: ${props => props.left 
    ? 'translateY(-50%)' 
    : 'translateY(-50%) rotateY(180deg)'};
  transition: filter 0.3s ease;
  z-index: 0;
  ${props => props.left ? 'left: -25vw;' : 'right: -26vw;'}

  ${PikachuContainer}:hover & {
    filter: brightness(3) drop-shadow(0 0 10px #FFD700);
  }
`;

const PikachuComponent = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('7a5YotowDECg8U36QK46YiyEQPmw8ixf68LAnTr2pump');
  };

  return (
    <Container>
      <PikachuContainer>
        <TokenTextContainer>
          <TokenText> BUY $NIGGACHU</TokenText>
        </TokenTextContainer>
        <Text>NIGGACHU</Text>
        <Wing src={wingImage} alt="Left Wing" left />
        <Pikachu src={pikachuImage} alt="Pikachu" />
        <Wing src={wingImage} alt="Right Wing" />
      </PikachuContainer>
      <CopyableText onClick={handleCopy}>
        <Img src= {Copy} alt="" style={{paddingLeft: '15px', paddingRight: '15px'}}/>
        7a5YotowDECg8U36QK46YiyEQPmw8ixf68LAnTr2
      </CopyableText>
    </Container>
  );
}

export default PikachuComponent;