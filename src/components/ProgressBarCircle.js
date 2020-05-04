import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-row: 1 / span 3;
`;

const CricleBg = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.lightgray};
  stroke-width: 3.8;
`;

const Circle = styled.path`
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  stroke: ${(props) => (props.over100 ? props.theme.red : props.theme.blue)};
`;

const CircularChart = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
`;

const Percentage = styled.text`
  fill: #666;
  font-size: 0.5em;
  font-weight: ${(props) => props.theme.bold};
  text-anchor: middle;
`;

const ProgressBarCircle = ({ percentage }) => {
  return (
    <Wrapper>
      <CircularChart viewBox="0 0 36 36">
        <CricleBg
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <Circle
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          over100={percentage > 100}
        />
        <Percentage x="18" y="20.35">
          {`${percentage}%`}
        </Percentage>
      </CircularChart>
    </Wrapper>
  );
};

export default ProgressBarCircle;
