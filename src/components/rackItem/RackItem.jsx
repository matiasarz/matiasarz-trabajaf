import "./RackItem.css";

const RackItem = ({ rack }) => {
    if (!rack) return <h2>Cargando...</h2>;

    return (
        <div className="rackNumberContainer">
            <h1 className="rackNumber">{rack}</h1>
            {/* <ul className="rackNumberContainer">
                {racks.map((item) => (
                    <li className="rackNumber" key={item}>
                        {item}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default RackItem;
