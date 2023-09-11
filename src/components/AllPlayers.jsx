import React, { useState, useEffect } from "react";
import {fetchAllPlayers, fetchSinglePlayer} from '../API/index';
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";

export default function AllPlayers() {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    // const [search, setSearch] = useState('');

    useEffect(() => {
        async function allPlayersHandler(){
            const result = await fetchAllPlayers();
            const {data} = result;
            setPlayers(data.players);
        }
        allPlayersHandler();
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        console.log( "see details for", e.target.value);
        navigate(`/${e.target.value}`);
    }

    console.log("players log", players);
    return (players.map((player) => {
        return (
        <div>
            <p>{player.id}</p>
            <h2>{player.name}</h2>
            <p>{player.breed}</p>
            <p>{player.status}</p>
            <img src={player.imageUrl} alt="img"/>
            <br></br>
            <button onClick={(e) => handleClick(e)} className="details-button" key={player.id} value= {player.id}>See Details</button>
        </div>
        )}));
}