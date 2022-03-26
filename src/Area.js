import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

export default function Area() {
     const [base, setBase] = useState(0)
     const [height, setHeight] = useState(0)
     const [area, setArea] = useState(0)

     const onBaseChange = e => {
          e.preventDefault();
          setBase(e.target.value)
     }
     const onHeightChange = e => {
          e.preventDefault();
          setHeight(e.target.value)
     }
     const Compute = e => {
          axios.post(`http://localhost:4000/area`, { base, height })
               .then(res => {
                    setArea(res.data.area)
               })
     }

     return (
          <div className='Area'>
               <label>Base : </label>
               <input type="number" placeholder="Base" onChange={onBaseChange} required /> <br />
               <label>Height : </label>
               <input type="number" placeholder="Height" onChange={onHeightChange} required /><br />
               <button onClick={Compute} >Compute</button>
               <h3>Area : {area}</h3>
          </div>
     )
}