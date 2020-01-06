import React from "react";
import styled from "styled-components";
import Card from './Card';

const WelcomeWrapper = styled.section`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default function SaltFeed() {
  return (
    <WelcomeWrapper>
      <Card />
    </WelcomeWrapper>
  );
}