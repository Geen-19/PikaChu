import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CardsContainer = styled.div`
  padding-top: 2rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  color: #ffffff;
  text-align: start;
`;
const Text = styled.p`
    font-family: 'Satoshi1';
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    text-align: start;
    margin-bottom: 2rem;
    max-width: 800px;
    padding-top: 12px;
`
const H1 = styled.h1`
    color: #ffffff;
    font-family: 'Satoshi1';
    font-size: 64px;
    font-weight: 900;
    line-height: 86.4px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`
const H2 = styled.h2`
    color: #ffffff;
    text-align: start;
    font-family: 'Satoshi1';
    font-size: 28px;
    font-weight: 900;
    line-height: 37.8px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`
const Card = styled.div`
  background: linear-gradient(180deg, rgba(66, 66, 66, 0.25) 0%0, rgba(66, 66, 66, 0.1) 100% );
  border-radius: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 300px;
  text-align: center;
`;

const Buy = () => {
  return (
    <Container>
      <H1>HOW TO BUY</H1>
      <CardsContainer>
        <Card>
          <H2>CREATE A PHANTOM WALLET</H2>
          <Text>
            $NIGGACHU is the electric meme coin that powers up your wallet with
            the vibrant energy of Pikachu and the bold flair of a black-and-red
            design! Just like the beloved Pokémon, niggachu is here to bring
            excitement, laughs, and a little zap of fun into the world of
            cryptocurrency.
          </Text>
        </Card>
        <Card>
          <H2>GET SOME SOLANA FROM EXCHANGE</H2>
          <Text>
            $NIGGACHU is the electric meme coin that powers up your wallet with
            the vibrant energy of Pikachu and the bold flair of a black-and-red
            design! Just like the beloved Pokémon, niggachu is here to bring
            excitement, laughs, and a little zap of fun into the world of
            cryptocurrency.
          </Text>
        </Card>
        <Card>
          <H2>SWAP $SOL FOR $NIGGACHU</H2>
          <Text>
            $NIGGACHU is the electric meme coin that powers up your wallet with
            the vibrant energy of Pikachu and the bold flair of a black-and-red
            design! Just like the beloved Pokémon, niggachu is here to bring
            excitement, laughs, and a little zap of fun into the world of
            cryptocurrency.
          </Text>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Buy;