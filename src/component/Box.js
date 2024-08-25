import React from 'react'
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

const Box = () => {
    let increment = useSelector(state=>state.increment);

  return <div>증가값은 : {increment}
    <GrandSonBox />
  </div>

};

export default Box
