

import React, { useState } from 'react'

export default function Car() {
    const [car, setCar] = useState({
        brand : "Ford",
        model : "Mustang",
        year : "1964",
        color : "red"
    });

    const updateModel = (e) => {
        let m = e.target.value;
     
    }
  return (
    <div>
        <h3>My {car.brand}</h3>
        <p>
            It is a {car.color} {car.model} from {car.year}.
        </p>
        <input type="text" onKeyUp={(event) => {
            updateModel(event)
        }} />
        {/* <button type="button" onClick={() => updateModel("Fiesta")}>Update Model</button> */}
    </div>
  )
}