import React, { Component } from 'react';

class PictureItem extends Component {
	render() {

        let resolution = this.props.resolution

        return (
            <div className="picture_block">
                <img className="lead_picture" style={{ width: this.props.scale*100 + '%', height: this.props.scale*100 + '%'}} src={this.props.src} alt={this.props.alt} />
                <div className="dimension_info">
                    <span>Dimension: </span>
                    <span>{resolution.width} x {resolution.height} pixels</span>
                </div> 
            </div>
        );
    }
} 

export default PictureItem;