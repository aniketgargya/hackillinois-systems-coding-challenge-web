const Profile = ({ profile, name, description, email = "john.doe@example.com" }) => (
    <div className="profile">
        <div className="profile-content">
            <div className="text">
                <h2 className="name">{name.toUpperCase()}</h2>
                <p className="description">{description}</p>
                {email && <a className="email-wrapper" href={`mailto:${email}`}>
                    <svg className="email">
                        <use xlinkHref="/email.svg#Layer_1"></use>
                    </svg>
                </a>}
            </div>
            <div className="profile-picture" style={{ backgroundImage: `url(${profile})` }}></div>
        </div>
    </div>
);

export default Profile;