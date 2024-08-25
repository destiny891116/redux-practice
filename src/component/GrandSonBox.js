import React from 'react'
import { useSelector } from 'react-redux';


const GrandSonBox = () => {
    let decrement = useSelector(state=>state.decrement);
  return (
    <div>
       감소값은 : {decrement} 
    </div> 
  )
}

export default GrandSonBox
