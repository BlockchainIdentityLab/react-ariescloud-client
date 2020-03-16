import React from 'react';
import ProfileService from "../services/profileService";

const Profile = () => {
    let [profile, setProfile] = React.useState(null);

    let profileService = new ProfileService();

    React.useEffect(() => {
        profileService.getProfile()
            .then(response => {
                console.log("Profile", response.data)
                setProfile(response.data)
            })
    }, []);

    return profile ? <div className="card is-spaced">
            <h1 className="title">{profile.label}</h1>
            <h2 className="subtitle">{profile.did}</h2>
        </div> : null

}

export default Profile
