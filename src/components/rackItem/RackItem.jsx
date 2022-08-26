import './RackItem.css';

const RackItem = ({ data }) => {

    const { racks } = data;

    console.log(racks)

    if (!racks) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h1>Rack Item</h1>
            <ul className="rackNumberContainer">
                {
                    racks.map(item => <li className="rackNumber" key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default RackItem
