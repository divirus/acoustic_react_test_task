import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import axios from 'axios';

const apiFull = 'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8';

class App extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    await this.getDataFromApi();
  }

  getDataFromApi () {
    return axios.get(apiFull)
    .then(res => this.setState({ data: res.data }))
    .catch(error => {
        console.log('error', error);
    })
  }

  render() {

    return (
      <div className="app">
        <div className="header"></div>
        <div className="container">
          <div className="sidebar"></div>
          { this.state.data ? (<Content data={this.state.data} />) : null }
        </div>
      </div>
    );
  };
}

export default App;
