import ButtonNavigation from '../button_navigation/ButtonNavigation';
import './PulmonItem.css';

const PulmonItem = ({ data }) => {
	return (
		<div className="pulmonItem">
			<ButtonNavigation
				className="pulmonItemLink"
				toLink={`/reposicion/pulmon/${data.id}`}
				title={data.pulmon}
			/>
		</div>
	);
};

export default PulmonItem;
