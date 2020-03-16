import React from 'react'
import Modal from "../../../Components/Modal";
import RelationshipService from "../../../services/relationshipService";
import Loading from "../../../Components/Loading";

const CreateInvitationModal = ({showModal, hideModal}) => {
    let [invite, setInvite] = React.useState("");

    let relationshipService = new RelationshipService();

    React.useEffect(() => {
        showModal && createInvite()
    }, [showModal])

    const createInvite = () => {
        relationshipService.createInvitation()
            .then(response => {
                console.log("Created invite", response)
                setInvite(JSON.stringify(response.data))
            })
    };

    return (
        <Modal showModal={showModal} hideModal={hideModal}>
            {invite ? <div className="invitation card">
                <h1 className="subtitle">Copy Invitation</h1>
                {invite}
            </div> : <Loading/>}
        </Modal>
    )
}

export default CreateInvitationModal;
