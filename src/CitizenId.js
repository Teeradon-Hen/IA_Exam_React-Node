import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

export default function CitizenId() {
     const [citizenId, setCitizenId] = useState(null)
     const [data, setData] = useState()

     const onCitizenIdChange = e => {
          e.preventDefault();
          setCitizenId(e.target.value)
     }
     const Compute = e => {
          axios.post(`http://localhost:4000/ctitzenId`, { citizenId })
               .then(res => {
                    setData(JSON.stringify(res.data))
               })
     }

     return (
          <div className='Citizen'>
               <label>citizenId : </label>
               <input placeholder="citizenId" onChange={onCitizenIdChange} maxLength="13" /> <br />
               <button onClick={Compute} >Compute</button>
               <h3>Result : {data}</h3>
          </div>
     )
}