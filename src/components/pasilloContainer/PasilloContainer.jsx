import { useFetch } from '../../hooks/useFetch';
import  Pasillos from '../pasillo/Pasillos';
import { useParams } from 'react-router-dom';

const PasilloContainer = () => {

    const { data, loading } = useFetch('http://localhost:3000/data.json');

    const { id } = useParams();

    let selected = data.find(item => item.pulmon == id) || [];

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <Pasillos data={selected} />
        </div>
    )
}

export default PasilloContainer
