import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../pulmonContainer/PulmonContainer";
import RackItem from "../rackItem/RackItem";

const RackContainer = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getData("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => {
                let filtro = data.reduce((acc, item) => {
                    acc.push(item.rack);
                    return acc.flat().filter((item) => item.pasillo == id);
                }, []);
                let rack = filtro.map((item) => item.racks);
                setData(rack.flat());
            });
    }, [id]);

    return (
        <ul>
            {data.map((item) => (
                <RackItem key={item} rack={item} />
            ))}
        </ul>
    );
};

export default RackContainer;
