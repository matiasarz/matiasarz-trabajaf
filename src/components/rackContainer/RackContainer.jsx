import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../pulmonContainer/PulmonContainer";
import RackItem from "../rackItem/RackItem";
import ButtonBack from "../buttonBack/ButtonBack";

const RackContainer = () => {
    const [data, setData] = useState([]);
    const [route, setRoute] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        getData("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => {
                let idRoute = data.find((item) =>
                    item.pasillo.includes(parseInt(id))
                );

                let filtro = data.reduce((acc, item) => {
                    acc.push(item.rack);
                    return acc.flat().filter((item) => item.pasillo == id);
                }, []);

                let rack = filtro.map((item) => item.racks);

                setData(rack.flat());
                setRoute(idRoute.pulmon);
            });
    }, [id]);

    return (
        <>
            <ButtonBack to={`/reposicion/pasillo/${route}`} />
            <ul>
                {data.map((item) => (
                    <RackItem key={item} rack={item} />
                ))}
            </ul>
        </>
    );
};

export default RackContainer;
