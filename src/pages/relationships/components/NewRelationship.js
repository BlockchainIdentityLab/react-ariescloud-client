import React from 'react';
import RelationshipService from '../../../services/relationshipService';

const NewRelationship = ({updateRelationships}) => {
    let [invite, setInvite] = React.useState("");
    let [isAcceptInvite, setIsAcceptInvite] = React.useState(true);

    let relationshipService = new RelationshipService();

    const acceptInvite = () => {
        console.log(invite);
        let json_invite = JSON.parse(invite);
        console.log(json_invite);
        relationshipService.acceptInvitation(json_invite)
            .then(response => {
                console.log("invite response", response)
                updateRelationships();
            }).catch(error => {
            console.log("Error accepting invite", error)
        })
    };

    const createInvite = () => {
        relationshipService.createInvitation()
            .then(response => {
                console.log("Created invite", response)
                setInvite(JSON.stringify(response.data))
            })
    };


    return (
        <div className="box">
            {isAcceptInvite ?
                <input className="input is-large" value={invite} onChange={(e) => setInvite(e.target.value)}/>
                :
                <div>
                    {invite}
                </div>

            }
            <div className="buttons has-addons">
                <button className={isAcceptInvite ? "button is-primary is-selected" : "button"} onClick={() => {
                    isAcceptInvite ? acceptInvite() : setIsAcceptInvite(true)
                }}>Accept Invitation
                </button>
                <button className={!isAcceptInvite ? "button is-primary is-selected" : "button"} onClick={() => {
                    setIsAcceptInvite(false)
                    setInvite("")
                    createInvite()
                }}>Create Invite
                </button>
            </div>
        </div>)
};

export default NewRelationship;
