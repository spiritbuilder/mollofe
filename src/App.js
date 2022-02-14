import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import "./App.scss";
import { BiSearch } from "react-icons/bi";

import ImageCard from "./components/ImageCard";
function App() {

const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <div className="backgroundbanner">
          <div className="searchbox">
            <BiSearch size={20} color="#4d5d77" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search Photo"
            />
          </div>
        </div>

        <div className="grid">
<ImageCard />
        </div>
      </div>
    </div>
  );
}

export default App;
