/*import  {useState} from 'react'

export default function Basic() {
     const[color,setColor]=useState("red");
    const changeColor=(col)=>{
      setColor(col);

    }
  return (
    <>
    
    <p>My favorite color is {color} !</p>

    <button 
    
    onClick={()=> changeColor("blue")}

    type='button'>Blue</button>
    
    <button onClick={()=>changeColor("yellow") }> Yellow </button>
    
    </>

 
  )
}
*/

/*
import { useState } from 'react' // state herhangi bir nesne değiştiği zaman onun farkına varıyor(sayfa değiştirildiğinde yenilenmesi için.)

export default function Basic() {
    const [color, setColor] = useState("black") // color yazan yer metot adı(DEĞİŞKEN) setcolor yazan yer ise yazdığımız şeyi değiştirmeye yarıyor.(DEĞİŞKENİ DEĞİŞTİRMEYE YARAYAN FONKSİYON)
    const changeColor = (col) => {
        setColor(col);
    }
    return (
        <>
            <p>My favorite color is <span style={{ color: orange }}>{color}!</span></p>
            <button onClick={() => changeColor("Yellow")} type="button">Yellow</button>
            <button onClick={() => changeColor("Pink")} type="button">Pink</button>
            <button onClick={() => changeColor("Orange")} type="button">Orange</button>
            <button onClick={() => changeColor("Cyan")} type="button">Cyan</button>
            <button onClick={() => changeColor("Red")} type="button">Red</button>
            <button onClick={() => changeColor("Purple")} type="button">Purple</button>
        </>
    )
}
*/


import {useState} from 'react'

export default function Basic() {
    // const [colorTxt, setColorTxt] = useState("00000")
    const [color, setColor] = useState(null)

    const changeColor =(e) =>{
      //console.log(e.target.value)
      setColor(e.target.value)
     // setColorTxt(e.target.value)
    }
  
  return (
    <>
        <h3>My favorite color is <span style={{color : color}}>{color}</span>!</h3>
        <input type="color" onChange={(event) => {
          changeColor(event)
        }} />
    </>
  )
}