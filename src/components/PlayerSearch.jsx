import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";

export default function PlayerSearch(){
    const [name, setName] = useState("");
    const navigate = useNavigate();
    let {playerID} = useParams()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const result = await puppySearch(name);
            console.log(result);
            navigate(SinglePlayer(playerID))
        }
        catch(error){
            console.log(error);
        }
    }

    function search() {
        console.log("invoke player search");
        return (
            <div>
                <div className="player-search">
                <h2>Enter puppy name</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        <label>Name: 
                            <input className= "nameInput" value= {name} key= "name" onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <button type="submit"> Search </button>
                    </form>
                </div>
            </div>
        )
    }
    return search();
}