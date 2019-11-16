import React, { Component } from 'react';

class Body extends Component {
    createMarkup(string) {
        return {__html: string};
    }

	render() {
        return (
            <div className="content_body_block shadow">
                {
                    this.props.bodyData.map((data, index) => (
                        <div className="body_data_element" key={index} dangerouslySetInnerHTML={this.createMarkup(data)} />
                    ))
                }
            </div>
        );
    }
} 

export default Body;