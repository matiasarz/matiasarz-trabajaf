import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getData } from "../pulmonContainer/PulmonContainer";
import RackItem from "../rackItem/RackItem";

const RackContainer = () => {

    const [ data, setData ] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getData()
            .then(res => res.json())
            .then(data => {
                let h = data.map(item => item.rack);
                h.forEach(item => {
                    let a = item.find(item => item.pasillo == id);
                    if (a) {
                        setData(a)
                    }
                })
            })
    }, [])

    console.log(id);

    return (
        <div>
            <RackItem data={data} />
        </div>
    )
}

export default RackContainer
