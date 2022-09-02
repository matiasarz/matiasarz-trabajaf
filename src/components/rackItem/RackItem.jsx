import "./RackItem.css";

const RackItem = ({ rack }) => {
    if (!rack) return <h2>Cargando...</h2>;

    return <h1 className="rackNumber">{rack}</h1>;
};

export default RackItem;
