import React from 'react';
import App from '../App';
import axios from 'axios';

export class Update extends React.Component {

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

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/reviews/' +this.props.match.params.id)
        .then(response=>{
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Address:response.data.address,
                Image:response.data.image,
                Description:response.data.description
            })
        })
        .catch((error)=>{
            console.log(error);
        });
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
        alert("Restaurant: " + this.state.Name + " " + this.state.Address + " " + this.state.Poster + " " + this.state.Description)
        const newReview = {
            name: this.state.Name,
            address: this.state.Address,
            image: this.state.Image,
            description: this.state.Description,
            _id: this.state._id
        }
        axios.post('http://localhost:4000/api/reviews/'+this.state._id,newReview)
        .then((res)=>{
            console.log(res.data);
        })
        .catch();
    }

    //Form to update review
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
                        <label>Add Restaurant Image URL: </label>
                        <textarea type='text' className='form-control' value={this.state.Image} onChange={this.onChangeImage}>

                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Add Restaurant Review: </label>
                        <textarea type='text' className='form-control' value={this.state.Description} onChange={this.onChangeDescription}></textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit' value='Add Review' className='btn-primary'></input>
                    </div>
                </form>
            </div>

        );
    }
}