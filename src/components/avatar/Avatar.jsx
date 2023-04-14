import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Avatar.css';

const Avatar = ({ avatar }) => {
	const [toggle, setHide] = useState(false);
	const { title, area, img_url } = avatar;
	const toggleElement = () => setHide(!toggle);
	const niIdeaParaQueHiceEsto = toggle ? 'imgEmployee' : 'avatarInfo';

	return (
		<Link
			to={area}
			onMouseLeave={toggleElement}
			onMouseEnter={toggleElement}
		>
			<div className="avatar">
				<div className={niIdeaParaQueHiceEsto}>
					<h2>{title}</h2>
				</div>
				<img
					src={img_url}
					alt={title}
					className={niIdeaParaQueHiceEsto}
				/>
			</div>
		</Link>
	);
};

export default Avatar;
