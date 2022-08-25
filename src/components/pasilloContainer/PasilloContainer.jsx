import { Link, useParams } from "react-router-dom";
import { getData } from "../pulmonContainer/PulmonContainer";
import { useState, useEffect } from "react";
import './PasilloContainer.css';

const PasilloContainer = () => {

    const [ data, setData ] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getData()
            .then(res => res.json())
            .then(data => setData(data.filter(item => item.id == id)))
    }, [])

    const [ objeto ] = data;
    if (!objeto) {
        return <h2>Cargando</h2>
    }
    const { pasillo } = objeto;

    console.log(objeto)

    return (
        <div>
            <h1>PasilloContainer</h1>
            <div className="pasilloContainer">
                {
                    pasillo.map((item,index) => <Link to={`/pasillo/${item}`} key={index} ><h2>{item}</h2></Link>)
                }
            </div>
        </div>
    )
}

export default PasilloContainer
