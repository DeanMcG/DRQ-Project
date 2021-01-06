import React from 'react';
import App from '../App';
import { Reviews } from './reviews';
import axios from 'axios';


export class Display extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }


    state = {
        reviews: []


    };

    //Retrieves the Reviews API
    componentDidMount() {
        axios.get('http://localhost:4000/api/reviews')
            .then(

                (response) => {
                    this.setState({ reviews: response.data })
                }
            )
            .catch(

                (error) => { console.log(error) }
            );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/reviews')
            .then(

                (response) => {
                    this.setState({ reviews: response.data})
                }
            )
            .catch(

                (error) => { console.log(error) }
            );

    }

    //Displays the reviews on page
    render() {
        return (
            <div>
                <Reviews reviews={this.state.reviews} ReloadData={this.ReloadData}></Reviews>
            </div>

        );
    }
}