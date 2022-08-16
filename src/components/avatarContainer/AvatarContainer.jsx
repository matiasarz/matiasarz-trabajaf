import { useEffect } from "react";
import { useState } from "react";
import Avatar from "../avatar/Avatar";
import './AvatarContainer.css';

const getDataJson = () => fetch('http://localhost:3000/avatar.json');

const AvatarContainer = () => {

    const [ dataJson, setDataJson ] = useState([]);

    useEffect(() => {
        getDataJson()
            .then(response => response.json())
            .then(data => setDataJson(data))
            .catch(e => console.log(`Error: ${e}`))
    }, [])

    return (
        <div className="avatarContainer">
            {
                dataJson.map(data => <Avatar data={data} key={data.id} />)
            }
        </div>
    )
}

export default AvatarContainer
