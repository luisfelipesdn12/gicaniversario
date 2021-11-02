import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
  }, []);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 150,
    dragFriction: 0.12,
    duration: 10000,
    stagger: 3,
    width: "1rem",
    height: "1rem",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a", "#6247aa", "#815ac0", "#9163cb", "#a06cd5", "#b185db", "#c19ee0", "#d2b7e5", "#e2cfea"],
  };

  return (
    <>
      <Confetti active={showConfetti} config={config} />
      <Title>My page</Title>
    </>
  );
}
