import React from 'react';
import NewRelationship from "./NewRelationship";
import RelationshipService from "../../../services/relationshipService";
import Profile from "../../../Components/Profile";
import NewRelationshipDropdown from "./NewRelationshipDropdown"
import CreateInvitationModal from "./CreateInvitationModal";
import AcceptInvitationModal from "./AcceptInvitationModal";

const Relationships = () => {
    let [relationships, setRelationships] = React.useState("");
    let [isActive, setIsActive] = React.useState(true)
    let [showCreateInviteModal, setShowCreateInviteModal] = React.useState(false);
    let [showAcceptInviteModal, setShowAcceptInviteModal] = React.useState(false)
    let relationshipService = new RelationshipService();

    React.useEffect(() => {
        fetchRelationships(isActive)
    }, []);

    const fetchRelationships = (isActive) => {
        setIsActive(isActive)
        relationshipService.getAllRelationships()
            .then(response => {
                console.log("Relationships", response, isActive);

                let filteredRels = isActive ? response.data.filter(rel => rel.state === "active") : response.data;

                setRelationships(filteredRels);
            })
            .catch(error => {
                console.log("Error getting relationships", error)
            })
    };


    return (<div>
        <div className="container">
            <div className="media">
                <h1 className="title media-content">Relationships</h1>
                <div className="media-right">
                    <NewRelationshipDropdown selectCreateInvitation={() => setShowCreateInviteModal(true)} selectAcceptInvitation={() => setShowAcceptInviteModal(true)}/>

                </div>
            </div>

                {relationships && <div>

                    <div className="buttons has-addons">
                        <button className={isActive ? "button is-primary is-selected" : "button"} onClick={() => fetchRelationships(true)}>Active</button>
                        <button className={!isActive ? "button is-primary is-selected" : "button"} onClick={() => fetchRelationships(false)}>All</button>
                    </div>

                    <table className="table is-spaced is-hoverable">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>State</th>
                            <th>Created</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            relationships.map(relationship => {
                                let date = new Date(relationship.created)
                                return <tr key={relationship.did}>
                                    <td>{relationship.name}</td>
                                    <td>{relationship.state}</td>
                                    <td>{date.getDate()+ "/" + date.getMonth() + 1 + "/" + date.getFullYear()}</td>
                                </tr>
                            })
                        }
                        </tbody>

                    </table>
                </div>}


            <CreateInvitationModal showModal={showCreateInviteModal} hideModal={() => setShowCreateInviteModal(false)}/>
            <AcceptInvitationModal showModal={showAcceptInviteModal} hideModal={() => setShowAcceptInviteModal(false)}/>
        </div>

    </div>)
};

export default Relationships;
