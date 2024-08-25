import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./component/Box"

function App() {
  const count = useSelector(state=>state.count);
  const id = useSelector(state=>state.id);
  const password = useSelector(state=>state.password);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}});
  }

  const decrement = () => {
    dispatch({type:"DECREMENT", payload:{num:-2}});
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{ id : "yongsei", password:"1234"} });
  }

  return (
    <div>
      <h1>id : {id} / password : {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrement}>감소!</button>
      <Box />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
