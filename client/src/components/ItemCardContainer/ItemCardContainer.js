import React, {Component} from "react";
import ItemCard from "../ItemCard/ItemCard";
import axios from "axios";
import "./ItemCardContainer.css"
class ItemCardContainer extends Component {
    state = {
        searchResults: [],
        products: [
            {
                name: 'Large Hotdog',
                price: '$140',
             company: "Will's Goods",
             img: 'https://gradientjoy.com/450'
            },
            {
                name: 'Large Hotdog',
                price: '$140',
             company: "Will's Goods",
             img: 'https://gradientjoy.com/450'
            },
            {
                name: 'Large Hotdog',
                price: '$140',
             company: "Will's Goods",
             img: 'https://gradientjoy.com/450'
            },
            {
                name: 'Large Hotdog',
                price: '$140',
             company: "Will's Goods",
             img: 'https://gradientjoy.com/450'
            },
            {
                name: 'Large Hotdog',
                price: '$140',
             company: "Will's Goods",
             img: 'https://gradientjoy.com/450'
            }
        ],
       count:0
       
    };

    componentDidMount() {
        //display all items
     //   axios.get("/api/items")
     //       .then(res => this.setState({searchResults: res.data}))
     //       .catch(err => console.log(err));
   //  this.setState({products: {  name: 'Large Hotdog',
   //  price: '$140',
   //  company: "Will's Goods"}})
   

console.log(this.state.products);
    };

    render() {
        return (
            <div className="product-container">
                {this.state.products.map((result,index) => (
                   // {setState({count: state.count + 1})}
                  
                    <ItemCard
                   price={result.price}
                   name={result.name}
                   company={result.company}
                   id={index}
                   // item={result}
                    />
                ))}
            </div>
        );
    }
}

export default ItemCardContainer;