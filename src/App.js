import './App.css';
import { useState, createContext } from 'react';
import Child from './Child.jsx';
import Child1 from './Child1.jsx';
const Contest = createContext();
function App() {
  const [data, setData] = useState("john");
  const [city, setCity] = useState("hyd");
  const [cart,setCart]=useState([
    {"name":"product1","price":1200,"qunty":1},
    {"name":"product2","price":1200,"qunty":1},
    {"name":"product3","price":1200,"qunty":1},

  ])
  const [addToCart,setaddToCart]=useState([]);

  const val = {addToCart,setaddToCart };

  return (
    <Contest.Provider value={val}>
      <p>My name is {data} and I am from {city}</p>
      <button onClick={() => {setData("teja");
      setCity("chennai")
      }}>Convert</button>
      {addToCart.map((items,value)=>(
        <div key={value}>
          <div>{items.name}-{items.price}</div>
        </div>
      ))}
      <hr></hr>
      <Child />
      <Child1 />
    </Contest.Provider>
  );
}

export { Contest };
export default App;
