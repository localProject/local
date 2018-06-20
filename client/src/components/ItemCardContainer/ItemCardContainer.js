import React, {Component} from "react";
import ItemCard from "../ItemCard/ItemCard";
import axios from "axios";

class ItemCardContainer extends Component {
    state = {
        searchResults: []
    };

    componentDidMount() {
        //display all items
        axios.get("/api/items")
            .then(res => this.setState({searchResults: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                {this.state.searchResults.map(result => (
                    <ItemCard
                    item={result}
                    />
                ))}
            </div>
        );
    }
}

export default ItemCardContainer;