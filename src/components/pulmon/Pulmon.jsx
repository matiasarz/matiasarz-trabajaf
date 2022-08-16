import useFetch from "../../hooks/useFetch";
import './Pulmon.css';

const Pulmon = () => {

    const { data, loading } = useFetch('http://localhost:3000/data.json');

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className="pulmonContainer">
            {
                data.map(item => <div className="uniquePulmon" key={item.id}><h2>{item.pulmon}</h2></div>)
            }
        </div>
    )
}

export default Pulmon
