import React, {Component} from "react";
import Cart from "../Cart/Cart";
import axios from "axios";

class CheckoutModal extends Component {
    state = {
        shoppingCart: []
    };

    componentDidMount() {
        // display items in shopping cart
        axios.get("api/itemsInCart")
            .then(res => this.setState({shoppingCart: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>checkout</h2>
                </div>
                {this.state.shoppingCart.map(result => (
                    <Cart 
                    purchase={result}
                    />
                <hr />
                <div className="row">
                    <h3>total</h3><br />
                    <button>pay</button>
                </div>
            ))}
            </div>
        );
    }
}

export default CheckoutModal;