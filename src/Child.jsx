import React from 'react'
import {Contest} from "./App"
import {useContext} from 'react'
export default function Child() {
    const {data,setData,city,setCity}=useContext(Contest)
  return (
    <div>
     <p>My name is {data} and I am from {city}</p>
      <button onClick={() => {setData("Saiteja");
      setCity("Mumbai")
      }}>Convert</button>
      <hr />
    </div>
  )
}
