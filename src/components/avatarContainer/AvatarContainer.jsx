import { useFetch } from '../../hooks/useFetch.js';
import Avatar from "../avatar/Avatar";
import './AvatarContainer.css';

const AvatarContainer = () => {

    const { data } = useFetch('http://localhost:3000/avatar.json');

    return (
        <div className="avatarContainer">
            {
                data.map(item => <Avatar data={item} key={item.id} />)
            }
        </div>
    )
}

export default AvatarContainer
