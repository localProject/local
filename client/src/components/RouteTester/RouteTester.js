import React, {Component} from "react";
import axios from "axios";
import Combobox from '../Combobox';

class RouteTester extends Component {
    constructor() {
        super()
        this.state =    { files: "",
                            categoryChoices: [
                                "Art", "Bakery", "Beer", "Coffee", "Condiments", "Dairy",
                                "Flowers", "Furniture", "Gluten-Free", "Health & Beauty", "Home",
                                "Jewelry", "Meat", "Novelty", "Organic", "Other Beverages", "Pets",
                                "Pottery", "Produce", "Seafood", "Snacks", "Specialty Foods", "Spirits",
                                "Sweets", "Textiles", "Wine"
                            ], 
                            productName:"",
                            productPrice:"",
                            productURL:"",
                            vendorID:"1"
                        }


        this.uploadFiles=this.uploadFiles.bind(this)                            
    }
    
    uploadFiles() {
        axios.post('/upload', {
            upl: this.state.files
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({ files: [] });
    }

    addNewItem() {
        let newItem = {
            itemName: "test",
            artisanID:"1",
            img:"",
            price:"10",
            category:"cowbell"
        }
        axios.post('/api/vendoritems/addnew', { newItem })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">    
                        <section>
                            <div className="form-group">
                                <label>Product Name:</label><br/>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    name="productName"
                                    value={this.state.productName}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price (USD, including shipping):</label><br/>
                                <input
                                    type="text"
                                    placeholder="Product Price"
                                    name="productPrice"
                                    value={this.state.productPrice}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <label>Item Category</label>
                            <Combobox data={this.state.categoryChoices}/>
                            <button onClick={this.uploadFiles}>
                                Submit changes
                            </button>
                            <button onClick={this.addNewItem}>
                                Add New Item
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

}

export default RouteTester;
