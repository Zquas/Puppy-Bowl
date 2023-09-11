import React, { useState, useEffect } from "react";
import { createPlayer } from "../API";
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";
import { useParams} from "react-router-dom";
// import {fetchSinglePlayer} from '../API/index';

export default function NewPlayerForm(playerObj){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    let {playerID} = useParams()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const result = await createPlayer( name, breed, status, image);
            console.log(result);
            navigate(SinglePlayer(playerID))
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Enter puppy details</h2>
            <div>
                <form method="post" onSubmit={handleSubmit}>
                    <label>Name: 
                        <input className= "nameInput" value= {name} key= "name" onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>Breed:
                        <input className= "breedInput" value= {breed} key= "breed" onChange={(e) => setBreed(e.target.value)}/>
                    </label>
                    <label>Status:
                        <input className= "statusInput" value= {status} key= "status" onChange={(e) => setStatus(e.target.value)}/>
                    </label>
                    <label>Image:
                        <input className= "classInput" value= {image} key= "class" onChange={(e) => setImage(e.target.value)}/>
                    </label>
                    <button type="submit"> Submit form </button>
                </form>
            </div>
        </div>
    )
}