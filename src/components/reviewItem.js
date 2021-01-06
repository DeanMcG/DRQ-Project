import React from 'react';
import App from '../App';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class ReviewItem extends React.Component {

    constructor(){
        super();

        this.DeleteReview = this.DeleteReview.bind(this);
    }


    DeleteReview(e){
        e.preventDefault();
        console.log("Delete: "+this.props.review._id);

        axios.delete("http://localhost:4000/api/reviews/"+this.props.review._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.review.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.review.image} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.review.address} <br></br>
                                {this.props.review.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/update/"+ this.props.review._id} className="btn btn-primary">Update</Link>
                    <Button variant="danger" onClick={this.DeleteReview}>Delete</Button>
                </Card>


            </div>

        );
    }
}