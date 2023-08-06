import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function handleSearch(query) {
    fetchGifs(query);
  }

  function fetchGifs(query) {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
