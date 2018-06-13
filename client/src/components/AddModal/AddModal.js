import React, {Component} from "react";
// import modal?

const AddModal = () => (
    <div>
        <h2>{props.itemName} added to cart!</h2>
        <p>
            <button>keep shopping</button>
            <button>go to checkout</button>
        </p>
    </div>
);

export default AddModal;