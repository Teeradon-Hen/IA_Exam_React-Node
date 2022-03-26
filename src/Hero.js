import React, { useState } from 'react'
import './App.css';

export default function Hero() {
     const [Text, setText] = useState('');
     const clickHero  = e => {
        //  console.log(e.target.textContent)
        //Delete number
          var hero = String(e.target.textContent).replace(/\d/g,"")
          setText( hero)
     }
     return ( 
          <div className='Hero'>
               <h2>My Heros </h2>
               <ul >
                    <li onClick={clickHero}>1 Deku</li>
                    <li onClick={clickHero}>2 Todoroki</li>
                    <li onClick={clickHero}>3 มหาเทพระเบิดสังหารไดนาไมท์</li>
                    <li onClick={clickHero}>4 Antman</li>
                    <li onClick={clickHero}>5 Spiderman</li>
                    <li onClick={clickHero}>6 Dr Nice</li>
                    <li onClick={clickHero}>7 Necromancer</li>
                    <li onClick={clickHero}>8 Bombasto</li>
                    <li onClick={clickHero}>9 Celeritas</li>
                    <li onClick={clickHero}>10 Magneta</li>
                    <li onClick={clickHero}>11 RubberMan</li>
                    <li onClick={clickHero}>12 Dynama</li>
                    <li onClick={clickHero}>13 Dr IQ</li>
                    <li onClick={clickHero}>14 Magma</li>
                    <li onClick={clickHero}>15 Tornado</li>
               </ul>
               <p >My hero is <b><u>{Text}</u></b></p>
          </div>
     )
}
 