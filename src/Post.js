import React, { useState, useEffect } from 'react'

export default function Post() {
     const [data, setData] = useState([])

     useEffect(async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
          const data = await response.json()
          setData(data)
     }, [])
     return (
          <table>
               <tbody>
                    <tr>
                         <th>Id</th>
                         <th>User Id</th>
                         <th>Title</th>
                         <th>Body</th>
                    </tr>
                    {data.map(ele =>
                         <tr key = {ele.id}>
                              <td>{ele.id}</td>
                              <td>{ele.userId}</td>
                              <td>{ele.title}</td>
                              <td>{ele.body}</td>
                         </tr>
                    )}
               </tbody>
          </table>
     )
}