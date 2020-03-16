import React from 'react'
import Modal from "../../../Components/Modal";
import RelationshipService from "../../../services/relationshipService";

const AcceptInvitationModal = ({showModal, hideModal}) => {
    let [invite, setInvite] = React.useState("");

    let relationshipService = new RelationshipService();

    const acceptInvite = () => {
        console.log(invite);
        let json_invite = JSON.parse(invite);
        console.log(json_invite);
        relationshipService.acceptInvitation(json_invite)
            .then(response => {
                console.log("invite response", response)
            }).catch(error => {
            console.log("Error accepting invite", error)
        })
    };

    const hideAcceptModal = () => {
        setInvite("")
        hideModal()
    };


    return (
        <Modal showModal={showModal} hideModal={hideAcceptModal}>
            <div className="invitation card">
                <h1 className="subtitle">Accept Invitation</h1>
                <input className="input is-large" value={invite} onChange={(e) => setInvite(e.target.value)}/>


                <button className="button is-primary is-centered" onClick={() => acceptInvite()}>
                    Accept Invitation
                </button>
            </div>
        </Modal>
    )
}

export default AcceptInvitationModal;
