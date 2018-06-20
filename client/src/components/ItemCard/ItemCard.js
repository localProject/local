import React, {Component} from "react";
import "./ItemCard.css";

const ItemCard = ({item}) => (
    <div className="col-sm">
        {/*image*/}
        {item.img}<br />
        <h2>{item.itemName}</h2><br />
        {item.price}<br />
        <button onClick={() => item.triggerModal(item._id)}>Buy</button>
        {/*modal to trigger buy = item.modal*/}
    </div>
);

export default ItemCard;