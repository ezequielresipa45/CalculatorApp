import React from 'react'
import './NumericButton.css'

export default function NumericButton({children, setState, state}) {

  

  const addNumberToState  = (params) => {
    
    
    setState(state + params)
    
  };

  return (
    <button onClick={() => addNumberToState(children)} className= 'NumericButton'> {children} </button>
  )
}
