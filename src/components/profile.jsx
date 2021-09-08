const Profile = ({ profile, name, description}) => (
    <div className="profile">
        <div className="text">
            <h2 className="name">{name.toUpperCase()}</h2>
            <p className="description">{description}</p>
        </div>
        <div className="profile-picture" style={{ backgroundImage: `url(${profile})` }}></div>
    </div>
);

export default Profile;