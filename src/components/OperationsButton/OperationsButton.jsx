import React from 'react'
import './OperationsButton.css'

export default function OperationsButton({children,funct, bgColor, colorFont}) {

 
  return (
    <button style={{backgroundColor: bgColor, color: colorFont}}  onClick={()=>funct(children)} className={`OperationsButton`}> {children} </button>
  )
}
