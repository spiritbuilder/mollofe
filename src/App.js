import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import "./App.scss";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

import ImageCard from "./components/ImageCard";
import Modal from "./components/Modal";
function App() {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState(null);
  const [search, setSearch] = useState(null);
  const [searching, setSearching] = useState(false);

  const fetchImages = async () => {
    try {
      let response = await axios.get(
        baseUri + "?query=african&page=1",
        Authorization
      );
      console.log(response);

      setImages(response.data.results.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  const searchImages = async () => {
    try {
      setSearching(true);
      let response = await axios.get(
        baseUri + `?query=${search}&page=1`,
        Authorization
      );
      console.log(response);

      setImages(response.data.results);
      setSearching(false);
    } catch (error) {
      console.log(error);
      setSearching(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

 

  return (
    <div className="App">
      {modal && <Modal image={modal} clear={setModal} />}
      <div className="container">
        <div className="backgroundbanner">
          {searching ? (
            <div>Searching Results for "{search}"</div>
          ) : (
            <div className="searchbox">
              <span className="search-btn">
                <BiSearch
                  size={20}
                  color="#4d5d77"
                  onKeyPress={(e) => {
                    if (search && e.key === "Enter") {
                      searchImages();
                    }
                  }}
                />
              </span>
              <input
                onKeyPress={(e) => {
                  if (search && e.key === "Enter") {
                    searchImages();
                  }
                }}
                type="text"
                className="searchInput"
                placeholder="Search Photo"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          )}
        </div>
        <div className="gridcontainer">
          <div className="grid">
            {images &&
              images.map((image, id) => (
                <ImageCard key={id} details={image} select={setModal} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const baseUri = "https://api.unsplash.com/search/photos";
const Authorization = {
  headers: {
    Authorization: "Client-ID QBzPDWi_FBDHw5aRX6O53xBA8m5WRjYilmXGbx8NHwg",
  },
};
