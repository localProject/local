import React, {Component} from "react";
import "./ItemCard.css";

const ItemCard = props => (
    
 <div class='product-card' style={{  
    'animation': `rotateIn 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) ${props.id}00ms forwards`}}>
      <div class='product-image' style={{ 'background-image': `url('https://gradientjoy.com/600?id=${Math.floor(Math.random() * Math.floor(300))}')` }}></div>
      <div class='product-info'>
          <div class='product-price'>{props.price}</div>
       <div class='product-info-text'>
         <div class='product-name'>{props.name}</div>
         <div class='product-company'>by {props.company}</div>
       </div>
     </div>
     </div>
);

export default ItemCard;