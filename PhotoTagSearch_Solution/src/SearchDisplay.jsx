import React from "react";
import PhotoCard from "./PhotoCard";
import TagStat from "./TagStat";
import "./SearchDisplay.css";
import { Trash2 } from "react-feather";

//This component displays a search and its photos
//Do not change any code in this component
const SearchDisplay = ({ search, deleteSearch }) => {
  return (
    <div className="search">
      <TagStat tag={search.tag}></TagStat>
      {search.photos.map((photo) => (
        <PhotoCard key={photo._id} url={photo.url} tags={photo.tags} />
      ))}
      <button
        data-testid="delete-btn"
        onClick={() => {
          deleteSearch(search.id);
        }}
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default SearchDisplay;
