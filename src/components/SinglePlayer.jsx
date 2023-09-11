import { useState, useEffect } from "react";
import { deletePlayer, fetchSinglePlayer } from "../API/index";
import AllPlayers from "./AllPlayers";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";

export default function SinglePlayer() {
    const navigate = useNavigate();
    const [player, setPlayer] = useState({});
    let {playerID} = useParams()

    useEffect(() => {
        async function singlePlayersHandler(){
            const result = await fetchSinglePlayer(playerID);
            const {data} = result;
            setPlayer(data.player);
        }
        singlePlayersHandler();
    },[])

    async function handleClick (e) {
        e.preventDefault();
        try{
            const result = await deletePlayer( playerID);
            console.log(result);
            navigate(AllPlayers());
        }
        catch(error){
            console.log(error);
        }
    }



    function renderSinglePlayer() {
        console.log("invoke single player rendering");
        return (
            <div key = {player.id} className="player-details">
            <div className="player-details-items">
            <h2>Player Details</h2>
                <img src = {player.imageUrl} alt={player.name} />
                <h2>Name: {player.name}</h2>
                <h4>Breed: {player.breed}</h4>
                <h4>ID: {player.id}</h4>
                <h4>Puppy Status: {player.status}</h4>
                <h4>Team: {player.teamID}</h4>
                <button onClick={(e) => handleClick(e)} className="delete-button" key={player.id} value= {player.id}>Remove from roster</button>
            </div>
            </div>
        )
    }
    return renderSinglePlayer();
}