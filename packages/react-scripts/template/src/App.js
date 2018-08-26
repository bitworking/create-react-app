// @flow
import React from 'react';
import styled from 'styled-components';
import 'constants/style/global';

const AppStyled = styled.div`
  padding: 200px;
  text-align: center;
  perspective: 500px;
  overflow: hidden;

  @keyframes rotate {
    from {transform: rotateY(0deg);}
    to {transform: rotateY(360deg);}
  }

  & div:first-child {
    animation-name: rotate;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & > div:last-child {
    margin-top: 100px;
  }
`;

const App = () => (
  <AppStyled>
    <div>Bootstrapped with bitworking-react-scripts</div>
    <div>built with ❤</div>
  </AppStyled>
);

export default App;
