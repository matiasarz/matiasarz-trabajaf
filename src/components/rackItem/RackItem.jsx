import "./RackItem.css";

const RackItem = ({ rack }) => {
    if (!rack) return <h2>Cargando...</h2>;

    return <h2 className="rackNumber">{rack}</h2>;
};

export default RackItem;
