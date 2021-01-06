import React from 'react';
import App from '../App';
import { ReviewItem } from './reviewItem';


export class Reviews extends React.Component {

    render() {
        return this.props.reviews.map((review) => {
            return <ReviewItem review={review} ReloadData={this.props.ReloadData}></ReviewItem>
        })
    }
}