import {  RouteComponentProps } from "@reach/router"
import './Profile.css';


interface ProfileProps {
	path: RouteComponentProps;
}


const Profile: React.FC<ProfileProps> = () => {
	return (
		<div className="profile-page">
			<h1>Profile Page </h1>
		</div>
	);
};

export default Profile;
