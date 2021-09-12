import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import style from 'styled-components';

import { RootState } from '../src/store/reducers';
import * as counterAction from '../src/store/actions/counter';
import { Button, TextField } from '@material-ui/core';

interface Props {
  $actionType?: 'decrement' | 'increment';
}

const Container = style.div`
    text-align:center;
    width:100%;
`;

const CounterButton = style(Button)<Props>`
    background-color: ${(props) =>
      props.$actionType === 'decrement'
        ? props.theme.palette.secondary.main
        : props.theme.palette.primary.main};   
    margin 0.5rem; 
`;

const Home: NextPage = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>{`Counter is ${counter}`}</h1>
      <CounterButton onClick={() => dispatch(counterAction.incrementCount())}>add</CounterButton>
      <CounterButton
        $actionType='decrement'
        variant='outlined'
        onClick={() => dispatch(counterAction.decrementCount())}
      >
        decrement
      </CounterButton>
    </Container>
  );
};

export default Home;
