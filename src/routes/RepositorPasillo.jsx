import Boton from '../components/boton/Boton';
import PasilloContainer from '../components/pasilloContainer/PasilloContainer';
import '../css-routes/RepositorPasillo.css';

const RepositorPasillo = () => {

    const buttonStyle = {
        marginTop: '20px',
        marginBottom: '20px'
    }

    return (
        <div className='repositorPasilloContainer'>
            <div style={buttonStyle}>
                <Boton to='/repositor'/>
            </div>
            <PasilloContainer />
        </div>
    )
}

export default RepositorPasillo
