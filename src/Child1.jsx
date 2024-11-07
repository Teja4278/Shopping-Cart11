import React from 'react'
import {Contest} from "./App"
import {useContext} from 'react'

export default function Child1() {
    const {data,setData,city,setCity}=useContext(Contest)
  return (
    <div>
       <p>My name is {data} and I am from {city}</p>
      <button onClick={() => {setData("Bhaskar");
      setCity("Delhi")
      }}>Convert</button>
      <hr></hr>
    </div>
  )
}
