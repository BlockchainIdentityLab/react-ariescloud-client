import axios from 'axios';


let apiUrl = process.env.API_URL;

function RelationshipService() {

    this.url = apiUrl;

    this.acceptInvitation = (invite) => {
        console.log("Accept URL", apiUrl);
        return axios.post(this.url + "invitations", invite)
    }

    this.createInvitation =() => {
        return axios.get(this.url + "invitations")
    }

    this.getAllRelationships = () => {
        return axios.get(this.url + "relationships")
    }


}

export default RelationshipService;
