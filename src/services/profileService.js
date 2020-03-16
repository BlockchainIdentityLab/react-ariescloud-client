import axios from 'axios';

let apiUrl = process.env.API_URL;

function ProfileService() {

    this.url = apiUrl;

    this.getProfile = () => {
        return axios.get(this.url + "profile");
    }
}

export default ProfileService
