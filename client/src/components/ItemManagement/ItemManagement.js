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
                            productURL:"",
                            artisan:{artisan:{}},
                            vendorItems:[]
                        }


        this.uploadFiles=this.uploadFiles.bind(this)                            
    }

    getArtisanItems = () => {
        let searchPath = `/api/vendoritems/all/${this.state.artisan.artisan.id}`;
        console.log(searchPath)
        axios.get(searchPath)
        .then((response)=>{
            let arrayOfItems = response.data.map(itemID=>{
                return itemID.itemName;
            })
            this.setState({vendorItems:arrayOfItems})
        })
        .catch((err)=>console.log(err))
    }

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });
      };

    componentDidMount(){
        this.setState({artisan:this.props.user}, this.getArtisanItems)
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

    productSelected() {

    }

    clearAllForNewProduct() {

    }
    
      render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">   
                        <div className="row">
                            <div className="col-md-6">  
                                <Combobox data={this.state.vendorItems}/>
                            </div>
                            <div className="col-md-2"> 
                                <button onClick={this.productSelected}>
                                    Go
                                </button>
                            </div>
                            <div className="col-md-4"> 
                                <button onClick={this.clearAllForNewProduct}>
                                    Add new item
                                </button>
                            </div>
                        </div>
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
                                    <p>Drag a picture here to upload</p>
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
                        <ItemCard price={this.state.productPrice} name={this.state.productName} company={`the company`}/>
                    </div>    
                </div>
            </div>
        );
      }

}

export default ItemManagement;
