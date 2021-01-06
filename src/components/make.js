import React from 'react';
import App from '../App';
import axios from 'axios';

export class Make extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            Name: '',
            Address: '',
            Image: '',
            Description: ''
        }
    }


    //Changes Name
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    //Changes Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }


    //Changes Image
    onChangeImage(e) {
        this.setState({
            Image: e.target.value
        });
    }

    //changes Description
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        });
    }

    //Method for submit button
    onSubmit(e) {
        e.preventDefault();
        alert("Review: " + this.state.Name + " " + this.state.Address + " " + this.state.Image + " " + this.state.Description)
        
        const newReview = {
            name: this.state.Name,
            address: this.state.Address,
            image: this.state.Image,
            description: this.state.Description
        }
        axios.post('http://localhost:4000/api/reviews', newReview)
        .then((res) => {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    //Form to add review
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Restaurant Name: </label>
                        <input type='text' className='form-control' value={this.state.Name} onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Restaurant Address: </label>
                        <input type='text' className='form-control' value={this.state.Address} onChange={this.onChangeAddress}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Image URL: </label>
                        <textarea type='text' className='form-control' value={this.state.Image} onChange={this.onChangeImage}>

                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Restaurant Review: </label>
                        <textarea type='text' className='form-control' value={this.state.Description} onChange={this.onChangeDescription}>
                            
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit' value='Add Review' className='btn-primary'></input>
                    </div>
                </form>
            </div>

        );
    }
}