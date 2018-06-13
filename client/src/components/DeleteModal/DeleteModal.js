import React, {Component} from 'react';
// import modal?

const DeleteModal = () => (
    <div>
        <h2>{props.itemName} deleted from cart!</h2>
        <p>
            <button>keep shopping</button>
        </p>
    </div>
);

export default DeleteModal;