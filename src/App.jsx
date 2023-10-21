import React, { useState,useRef } from 'react'

const App = () => {
const [Color,setChangecolor] = useState("")
const [Colorshow, setshowColor] = useState("")
const [isToggle,setToggle] = useState(false)
const colorCopy = useRef()



const Copycolor =()=>{
  if(!Color){
    return alert("Plzzzzz!! Choose the Color")
  }
  else{
  window.navigator.clipboard.writeText(Color)
  colorCopy.current.style.color = "rgb(230, 230, 230)"
  setToggle(true)
  }
}

const AddbgColor =()=>{
  setshowColor(Color)
  colorCopy.current.style.color="black"
  setToggle(false)
}
 
 

let letsee =()=>{}
  return (
    <>
    <div style={{backgroundColor:Colorshow}} className='main' >
      <h1>Color Maker</h1>
      <p>Choose Your Fav Color🌈</p>
      <div className='inputs'>
        <input onChange={(e)=>setChangecolor(e.target.value)} type='color'/>
        <input type='text' value={Color} onChange={letsee} ref={colorCopy} placeholder='Colormaker'/>
        {isToggle?<button onClick={AddbgColor}>AddBg</button>:
        <button onClick={Copycolor}>Copy</button>}
      </div>
    </div>
    </>
    )
}

export default App
