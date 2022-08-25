import { useEffect, useState } from "react";
import PulmonItem from "../pulmonItem/PulmonItem";
import './PulmonContainer.css';

export const getData = () => {
    return fetch('http://localhost:3000/data.json');
}

const PulmonContainer = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        getData()
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h1>Pulmon</h1>
            <div className="pulmonItemContainer">
                {
                    data.map(item => <PulmonItem key={item.id} data={item} />)
                }
            </div>
        </div>
    )
}

export default PulmonContainer
