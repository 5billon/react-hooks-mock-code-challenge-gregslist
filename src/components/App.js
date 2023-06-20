import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App(props) {
  const [info, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then((data) => {setData(data)
      })
  },[])
 
  
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={info}/>
      
    </div>
  );
}

export default App;
