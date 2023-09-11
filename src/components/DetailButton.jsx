import {useNavigate} from "react-router-dom";

export default function DetailButton({id, name}){
    const navigate = useNavigate()

    return (
        <button className="details-button" onClick={() => navigate("/players/" + id)} > view Details for </button>
    )
}