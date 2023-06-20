import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App(props) {
  const [info, setData] = useState([])
  const [search, setSearch] = useState('')
  const [checkedLocation, setCheckedLocation] = useState(false)
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  function removeListingFromInfo(id) {
    console.log(id)
    setData((currentListings) => currentListings.filter((listing) => listing.id !== id))

  }

  return (
    <div className="app">
      <Header
        setSearch={setSearch}
        checkedLocation={checkedLocation}
        setCheckedLocation={setCheckedLocation} />
      <ListingsContainer
        setData={setData}
        checkedLocation={checkedLocation}
        search={search}
        listings={info}
        onRemoveListing={removeListingFromInfo}
      />

    </div>
  );
}

export default App;
