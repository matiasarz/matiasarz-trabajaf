import AvatarContainer from "../components/avatarContainer/AvatarContainer";
import '../components/inicio/Inicio.css';

const Inicio = ({ mensaje }) => {
    return (
        <div className="inicio">
            <h1>{mensaje}</h1>
            <AvatarContainer />
        </div>
    )
}

export default Inicio
