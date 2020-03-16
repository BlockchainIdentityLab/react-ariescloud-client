import React from 'react';

export default ({selectCreateInvitation, selectAcceptInvitation}) => {

    let [isActive, setIsActive] = React.useState(false);

    return (

        <div className={isActive ? "dropdown is-right is-active" : "dropdown"}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => setIsActive(!isActive)}>
                    <span>+</span>
                    <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a className="dropdown-item" onClick={selectAcceptInvitation}>
                        Accept Invitation
                    </a>
                    <a className="dropdown-item" onClick={selectCreateInvitation}>
                        Create Invitation
                    </a>
                </div>
            </div>
        </div>
    )
}
