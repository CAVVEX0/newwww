import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: grid;
place-items: center;
min-height: 100vh;
height: 1;
background-color: #fff8f5;
`;
const Griid = styled.div`
padding: 1rem;
max-width: 64rem;
display: grid;
gap: 1rem;

`;
const Title = styled.h1`
font-size: 3.75rem;
height: 2.5rem;
gap: 1rem;
grid-column: span 3 / span 3;
grid-template-columns: repeat(3, minmax(0, 1fr));
align-items: center;
`;
const Text = styled.span`
grid-column: span 3 / span 3;
font-family: "Old Standard TT", serif;
font-weight: 400;
`;
const Para = styled.p`
grid-column-start: 1;
grid-column: span 2 / span 2;
padding-right: 3rem;
font-size: 1.125rem;
line-height: 1.75rem;
`;
const Grid1 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image1 = styled.img``;
const Grid2 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image2 = styled.img``;
const Grid3 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image3 = styled.img``;
const Grid4 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image4 = styled.img``;
const Grid5 = styled.div`
height: 4rem;
background-color: #144be2;
grid-column-start: 2;
`;
const Image5 = styled.img``;
const Grid6 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image6 = styled.img``;
const Grid7 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image7 = styled.img``;
const Grid8 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image8 = styled.img``;
const Grid9 = styled.div`
height: 4rem;
background-color: #144be2;
`;
const Image9 = styled.img``;

const Grid = () => {
  return (
    <Container>
      <Griid>
        <Title>
          <Text>Grid layout with Tailwind CSS And More</Text>
        </Title>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, harum?
        </Para>
        <Grid1>
          <Image1 />
        </Grid1>
        <Grid2>
          <Image2 />
        </Grid2>
        <Grid3>
          <Image3 />
        </Grid3>
        <Grid4>
          <Image4 />
        </Grid4>
        <Grid5>
          <Image5 />
        </Grid5>
        <Grid6>
          <Image6 />
        </Grid6>
        <Grid7>
          <Image7 />
        </Grid7>
        <Grid8>
          <Image8 />
        </Grid8>
        <Grid9>
          <Image9 />
        </Grid9>
      </Griid>
    </Container>
  );
};

export default Grid;
