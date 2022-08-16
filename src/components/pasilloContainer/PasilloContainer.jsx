import { useFetch } from '../../hooks/useFetch';
import  Pasillo from '../pasillo/Pasillo';

const PasilloContainer = ({ sendPulmon }) => {

    const { data, loading } = useFetch('http://localhost:3000/data.json');

    let selected = data.find(item => item.pulmon == sendPulmon) || [];

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <Pasillo data={selected} />
        </div>
    )
}

export default PasilloContainer
