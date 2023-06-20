import React, { useState } from "react";

function ListingCard({ listing, onRemoveListing }) {
  const [favorited, setFavorited] = useState(false)
  const { description, id, image, location } = listing
  const [visible, setVisible] = useState(true)

  function handleFavorite() {
    setFavorited(true)
  }
  function handleUnFavorite() {
    setFavorited(false)
  }
  function handleDeleteTrash() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    onRemoveListing(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleUnFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDeleteTrash(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
