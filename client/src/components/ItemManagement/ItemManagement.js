import React, {Component} from "react";
import axios from "axios";
import Dropzone from 'react-dropzone';
import Combobox from '../Combobox';
import ItemCard from '../ItemCard';
import ItemCardContainer from '../ItemCardContainer'
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
                            productID:"",
                            artisan:{artisan:{}},
                            vendorItems:[],
                            isNewItem:true
                        }


        this.uploadFiles=this.uploadFiles.bind(this)          
        this.submitItemToDatabase=this.submitItemToDatabase.bind(this)
        // this.handleProductComboBoxChange=this.handleProductComboBoxChange.bind(this)
        this.clearAllForNewProduct=this.clearAllForNewProduct.bind(this)
    }

    getArtisanItems = () => {
        let searchPath = `/api/vendoritems/all/${this.state.artisan.artisan.id}`;
        axios.get(searchPath)
        .then((response)=>{
            let arrayOfItems = response.data.map(itemID=>{
                return itemID;
            })
            this.setState({vendorItems:arrayOfItems})
        })
        .catch((err)=>console.log(err))
    }

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        console.log(`field name: ${name} with value: ${value}`)
        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
        if (name == "productName") {
            console.log("got here");
            console.log(this.state.productName);
            this.handleProductComboBoxChange(value);
            // this.setState({isNewItem:false});
        }
    };

    handleProductComboBoxChange = (productName) => {
        console.log(productName);
        for (let i=0; i<this.state.vendorItems.length; i++) {
            if (productName === this.state.vendorItems[i].itemName) {
                let currentItemInfo={
                        productURL:this.state.vendorItems[i].img,
                        productPrice:this.state.vendorItems[i].price,
                        productID:this.state.vendorItems[i]._id
                    };
                console.log(currentItemInfo);
                this.setState({
                    productURL:currentItemInfo.productURL,
                    productPrice:currentItemInfo.productPrice,
                    productID:currentItemInfo.productID,
                })
                return true;
            }
        }
    }

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
        let productURL = `https://s3.us-east-2.amazonaws.com/gbkherokubucket/${myfile.name}`
        this.setState({files:myfile});
        this.setState({productURL:productURL})
        console.log(productURL);
        console.log(typeof this.state.files);
    }

    uploadFiles() {
        axios.post('api /upload', {
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

    clearAllForNewProduct= ()=> {
        this.setState({productName:"",productPrice:"",productURL:"",isNewItem:true})
    }

    submitItemToDatabase = () => {
        let itemInformation = {
            itemName:this.state.productName,
            artisanID:this.state.artisan.artisan.id,
            img:this.state.productURL,
            price:this.state.productPrice
        };

        if (this.state.isNewItem) {
            axios.post("/api/vendoritems/addnew", { itemInformation })
            .then(function(res) {
                console.log(res);
            })
            .catch(function(error){
                console.log(error)
            })
        } else {
            let searchPath=`/api/vendoritems/${this.state.productID}`;
            axios.put(searchPath,{itemInformation})
            .then(function(res) {
                console.log(res);
            })
            .catch(function(error){
                console.log(error)
            })
        }
        this.clearAllForNewProduct();
    }
    
      render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">   
                        <div className="row">
                            <div className="col-md-8">  
                                {this.state.isNewItem ? 
                                <Combobox 
                                    label="Choose an existing product to modify:"
                                    name="productName" 
                                    data={this.state.vendorItems.map(item=>item.itemName)}
                                    handleChange={this.handleInputChange}
                                /> : 
                                <Combobox 
                                    label="Choose an existing product to modify:"
                                    name="productName" 
                                    data={""}
                                    handleChange={this.handleInputChange}
                                />}

                            </div>
                            {/* <div className="col-md-2"> 
                                <button onClick={this.productSelected}>
                                    Go
                                </button>
                            </div> */}
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
                            <div className="dropzone">
                                {/* <Dropzone onDrop={this.onDrop.bind(this)}> */}
                                <Dropzone onDrop={(files) => {
                                    this.dropped(files)
                                }}>
                                    <p>Drag a picture here to upload or click to browse for a file</p>
                                </Dropzone>
                            </div>
                            <aside>
                                <h3>Dropped files: {this.state.files.name}</h3>
                            </aside>
                            {/* <button onClick={this.submitItemToDatabase}> */}
                            <button style={{marginBottom:"30px"}} onClick={this.submitItemToDatabase}>
                                Submit changes
                            </button>
                        </section>
                    </div>
                    <div className="col-md-4">
                        <h1>Item will display as:</h1>
                        <ItemCard price={this.state.productPrice} name={this.state.productName} company={this.state.artisan.username} img={this.state.productURL}/>
                    </div> 
                </div>
            </div>
        );
      }

}

export default ItemManagement;