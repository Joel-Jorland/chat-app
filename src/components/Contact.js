import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';


function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
                <div>
                    <p className="name">{props.name}</p>
                        <div className="status">
                        <div className={props.online ? "status-online" : "status-offline"}/>
                    <p className="status-text">{props.online ? "online" : "offline"}</p>
                </div>
            </div>
            <h1>J'aime le poulet et le paté</h1>
        </div>
    );
  }

  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired, 
  };
  
  export default Contact; 