import React, { Component } from 'react';
import PictureItem from './PictureItem';

const apiTemplate = 'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124';

class Pictures extends Component {
    makeResolutionObject(height, width) {
        return {'height': height, 'width': width}
    }

	render() {
        let picture = this.props.picture;
        let altText = picture.asset.altText;
        let leadPicture = picture.renditions.lead
        let cardPicture = picture.renditions.card

        return (
            <div className="content_picture_block shadow">
                <h3>Lead Image</h3>
                <PictureItem scale={leadPicture.transform.scale} src={apiTemplate + leadPicture.source} resolution={ this.makeResolutionObject(leadPicture.height, leadPicture.width) } alt={altText}/>
                <h3>Card</h3>
                <PictureItem scale={cardPicture.transform.scale} src={apiTemplate + cardPicture.source} resolution={ this.makeResolutionObject(cardPicture.height, cardPicture.width) } alt={altText}/>
            </div>
        );
    }
} 

export default Pictures;