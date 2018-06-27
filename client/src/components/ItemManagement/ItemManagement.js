import React, {Component} from "react";
import axios from "axios";
import Dropzone from 'react-dropzone';
import Combobox from '../Combobox';
import ItemCard from '../ItemCard';
import {withUser} from "../../services/withUser";

class ItemManagement extends Component {
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
                            productURL:""
                        }


        this.uploadFiles=this.uploadFiles.bind(this)                            
    }
    
    dropped(myfiles) {
        let myfile = myfiles[0]
        // this.setState(prevState => ({
        //     files: [...prevState.files, myfiles]
        // }))
        console.log(this);
        console.log(this.state);
        this.setState({files:myfile});
        console.log(myfile);
        console.log(typeof this.state.files);
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
                            
                            <Combobox data={this.state.categoryChoices}/>
                            <div className="dropzone">
                                {/* <Dropzone onDrop={this.onDrop.bind(this)}> */}
                                <Dropzone onDrop={(files) => {
                                    this.dropped(files)
                                }}>
                                    <p>Drag a picture here.</p>
                                </Dropzone>
                            </div>
                            <aside>
                                <h3>Dropped files: {this.state.files.name}</h3>
                            </aside>
                            <button onClick={this.uploadFiles}>
                                Submit changes
                            </button>
                        </section>
                    </div>
                    <div className="col-md-4">
                        <h1>Item will display as:</h1>
                        <ItemCard price={this.productPrice} name={this.productName} company={`the company`}/>
                    </div>    
                </div>
            </div>
        );
      }

}

export default ItemManagement;
