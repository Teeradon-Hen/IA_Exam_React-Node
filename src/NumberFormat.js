import React, { useState } from 'react'
import './App.css';

export default function NumberFormat() {

     const [number, setNumber] = useState(0);
     const [text, setText] = useState('');
     const show = () => {
          var data = ""
          for (var i = 1; i <= number; i++) {
               for (var j = 1; j <= number - i; j++) {
                    data += " "
               }
               data += String(i)

               data += "*".repeat(2 * (i - 1))

               data += String(i)
               for (j = 1; j <= number - i; j++) {
                    data += " "
               }
               data += ";"
          }
          if (number === 1)
               data += String(1).repeat(2)
          for (i = number - 1; i > 0; i--) {

               for (j = 1; j <= number - i; j++) {
                    data += " "
               }

               data += String(i)

               data += "*".repeat(2 * (i - 1))

               data += String(i)

               for (j = 1; j <= number - i; j++) {
                    data += " "
               }
               data += ";"
          }
          setText(data)
          console.log(data.replaceAll(";", "\n"))
     }
     const onChange = (e) => {
          setNumber(e.target.value)
     }
     return (
          <div className='numberFormat'>
               <label>Number</label>
               <input type="number" value={number} onChange={onChange} />
               <button onClick={show}>Show</button>
               {text.split(";").map(i => <h4>{i}</h4>)}
          </div>
     )
}
