import { useParams } from "react-router-dom"

const RackContainer = () => {

    const { pedo } = useParams();

    console.log(pedo);


    return (
        <div>
            <h1>Rack</h1>
        </div>
    )
}

export default RackContainer
