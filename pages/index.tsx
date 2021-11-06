import React, { useEffect, useState, useMemo } from 'react';
import Confetti from 'react-dom-confetti';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Image = styled.img`
  width: 100%;
  padding: 2rem;
`;

const birthDate = new Date(2004, 10, 5);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
  }, []);

  const config = {
    angle: 0,
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

  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now);
    }, 1);
    return () => clearInterval(interval);
  }, [setNow]);

  const lifeTime = useMemo(() => {
    return new Date(now - birthDate.getTime());
  }, [now]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Confetti active={showConfetti} config={config} />
      </div>
      <section className="bg-indigo-400 text-white" style={{ display: "flex", justifyContent: "center" }}>
        <Image src="/nos.jpg" alt="nós" />
      </section>
      <section className="bg-gray-700 text-white px-6 p-3 md:grid md:grid-cols-4" style={{ backgroundImage: 'url(/confetti-14.gif)', backgroundBlendMode: 'lighten' }}>
        <span className="md:col-start-2 md:col-end-4">
          <h2 className="text-center font-bold mt-12 text-3xl md:text-4xl px-3">
            <span className="bg-gray-900 bg-opacity-50 px-3 rounded-lg">
              Muito obrigado por existir!
            </span>
          </h2>
          <h2 className="text-center text-indigo-900 mb-12 mt-5 font-bold text-6xl px-3">
            <span className="bg-white bg-opacity-50 px-3 rounded-lg">
              Parabéns, Gi!
            </span>
          </h2>
        </span>
      </section>
      <section className="bg-indigo-500 text-white px-6 pb-12 p-3 md:grid md:grid-cols-4">
        <span className="md:col-start-2 md:col-end-4">
          <h2 className="text-center font-bold mt-12 text-3xl px-3">
            Você é a luz! Você brilha! Eu tenho muito orgulho de você! É uma honra imensurável pra mim você dividir comigo sua existência!
          </h2>
          <h2 className="text-center font-bold mt-12 text-2xl px-3">
            Durante a sua vida, você passou:
          </h2>
          <h2 id="miliseconds-life" className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {lifeTime.getTime()}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            milisegundos sendo você, essa pessoa de quem eu me orgulho!
          </p>
          <h2 id="seconds-life" className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            segundos sendo mais amada do que você possa imaginar.
          </p>
          <h2 id="minutes-life" className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000 / 60)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            minutos erradinado amor, carinho, cuidado e empatia.
          </p>
          <h2 id="hours-life" className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000 / 60 / 60)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            horas sendo absolutamente linda! Sua beleza transcende as barreiras do físico.
          </p>
          <h2 id="days-life" className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000 / 60 / 60 / 24)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            dias fazendo o melhor sanduíche com azeite e tomati do mundo!!
          </p>
          <h2 className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000 / 60 / 60 / 24 / 30)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            meses tendo um cabelinho perfeito, mas tão tão perfeito.
          </p>
          <h2 className="font-bold mt-12 text-5xl md:text-6xl px-3">
            {Math.round(lifeTime.getTime() / 1000 / 60 / 60 / 24 / 30 / 12)}
          </h2>
          <p className="text-indigo-900 font-bold text-2xl md:text-3xl px-3">
            anos sendo especial, única, amada, necessária, indispensável, insubstituível. Sendo... você!
          </p>
        </span>
      </section>
    </>
  );
}
