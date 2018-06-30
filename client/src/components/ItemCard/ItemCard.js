import React, {Component} from "react";
import "./ItemCard.css";

const ItemCard = props => (


<div
class="product-card snipcart-add-item btn-floating btn-large waves-effect waves-light material-icons"
data-item-id={props.id}
data-item-name={props.name}
data-item-price={props.price}
data-item-weight="2"
data-item-url="http://myapp.com/products/B2009"
data-item-description={props.desc}
style={{  
 'animation': `rotateIn 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) ${props.id}00ms forwards` }}>

     <div class='product-image' style={{ 'background-image': `url(${props.img})` }}></div>
     <div class='product-info'>
     <div class='product-price'>${props.price}</div>
     <div class='product-info-text'>
     <div class='product-name'>{props.name}</div>
     </div>
    </div>
    </div>
   
);


export default ItemCard;