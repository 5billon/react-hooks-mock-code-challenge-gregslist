import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listItems = listings.map((itemObj)=> <ListingCard listing={itemObj}/>)
  return (
    <main>
      <ul className="cards">
        {listItems}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
