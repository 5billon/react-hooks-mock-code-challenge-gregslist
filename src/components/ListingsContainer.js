import React from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({ listings, onRemoveListing, search, checkedLocation, setData }) {
  const sortedListings = checkedLocation
    ? [...listings].sort((listingA, listingB) =>
      listingA.location.localeCompare(listingB.location)
    )
    : listings

  const filteredSearchListings = sortedListings.filter((listings) => {
    const lowerCaseDescription = listings.description.toLowerCase()
    const lowerCaseSearch = search.toLowerCase()
    return lowerCaseDescription.includes(lowerCaseSearch)
  }
  )
  const listItems = filteredSearchListings.map((itemObj) =>
    <ListingCard
      key={itemObj.id}
      listing={itemObj}
      onRemoveListing={onRemoveListing}

    />
  )



  return (
    <main>
      <ListingForm setData={setData} />
      <ul className="cards">
        {listItems}

      </ul>
    </main>
  );
}

export default ListingsContainer;
