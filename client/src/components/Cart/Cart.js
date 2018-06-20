import React, {Component} from "react";
import "./Cart.css";

const Cart = ({purchase}) => (
    <div className="row">
        {/*small image*/}
        <div className="col-sm">{purchase.img}</div>
        {/*item name*/}
        <div className="col-sm">{purchase.itemName}</div>
        {/*price and remove button*/}
        <div className="col-sm">
            {purchase.price}<br />
            <button>remove</button>
        </div>
    </div>
);

// remove button will remove it from array
export default Cart;