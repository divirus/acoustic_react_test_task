import React, { Component } from 'react';

class Properties extends Component {
    makeDate (dateString) {
        let date = new Date(dateString); 
        return date.toLocaleString();
    }

	render() {

        let renderData = this.props.propertiesData;
        let author = this.props.author;

        return (
            <div className="content_properties_block shadow">
                <div className="block_data author_block">
                    <label>Author:</label>
                    <span>{ author }</span>
                </div>
                <div className="block_data created_on_block">
                    <label>Created on:</label>
                    <span>{ this.makeDate(renderData.created) }</span>
                </div>
                <div className="block_data created_by_block">
                    <label>Created by:</label>
                    <span>{ renderData.creatorId }</span>
                </div>
                <div className="block_data last_modified_block">
                    <label>Last modified:</label>
                    <span>{ this.makeDate(renderData.lastModified) }</span>
                </div>
                <div className="block_data modified_by_block">
                    <label>Modified by:</label>
                    <span>{ renderData.lastModifierId }</span>
                </div>
            </div>
        );
    }
} 

export default Properties;