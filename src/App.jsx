import React, {useState} from 'react';
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm"; 
import SinglePlayer from "./components/SinglePlayer";
import DeleteButton from "./components/DeleteButton";
import DetailButton from "./components/DetailButton";
import PlayerSearch from "./components/PlayerSearch";
import {Routes, Route, Link} from "react-router-dom";
import './App.css'
// let {playerID} = useParams()
// "rafce" creates a new export component as a shortcut

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <nav>
          <Link to="/">All Players</Link>
          <Link to="/NewPlayerForm">New Player</Link>
          <Link to="/PlayerSearch">Player Search</Link>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers/>} />
          <Route path="/:playerID" element={<SinglePlayer/>} />
          <Route path="/newplayerform" element={<NewPlayerForm/>} />
          <Route path="/playersearch" element={<PlayerSearch/>} />
          <Route path="/detail" element={<DetailButton/>} />
          <Route path="/delete" element={<DeleteButton/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
