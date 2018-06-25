import React, {Component} from "react";
import axios from "axios";
import Dropzone from 'react-dropzone';
import Combobox from '../Combobox';
import ItemCard from '../ItemCard';

class ItemManagement extends Component {


    constructor() {
        super()
        this.state =    { files: [],
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
    }
    
    onDrop(files) {
        this.setState({
          files
        });
        console.log(this.state.files);
        this.uploadFiles(this.state.files)
    }

    uploadFiles(files) {
        console.log(`got it`)
        console.log(files);
        axios.post('/upload', {
            upl: files
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
        console.log(this.state)
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
                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                    <p>Drag a picture here.</p>
                                </Dropzone>
                            </div>
                            <aside>
                                <h3>Dropped files</h3>
                                <ul>
                                    {
                                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                    }
                                </ul>
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
