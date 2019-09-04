import React, {Component} from 'react';
import './ImageCredits.css';

export default class ImageCredits extends Component {

    render() {
        return(
            <div className="imageCredits">
                <a id ="userLink" href = {this.props.userlink}>{this.props.username} </a> / Unsplash
            </div>
        );
    }
}
