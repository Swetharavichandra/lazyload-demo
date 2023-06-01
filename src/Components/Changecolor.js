import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/Theme'
function Changecolor() {
    const[color,setColor]=useState("")
  const dispatch=useDispatch()
    return (
    <div>
        <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
        <button onClick={()=>{dispatch(changeColor(color))}}>Change color</button>
    </div>
  )
}

export default Changecolor