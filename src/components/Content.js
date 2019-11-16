import React, { Component } from 'react';
import Body from './Body';
import Pictures from './Pictures';
import Properties from './Properties';

class Content extends Component {
	render() {

        let renderData = this.props.data;

		return (
            <div className="content">
                <h3>{ renderData.elements.heading.value }</h3>
                <div className="panels">
                    <Body bodyData={ renderData.elements.body.values } />
                    <div className="info_panel">
                        <Properties propertiesData={ renderData } author={ renderData.elements.author.value } />
                        <Pictures picture={ renderData.elements.mainImage.value.leadImage } />
                    </div>
                </div>
            </div>
        );
    }
} 

export default Content;