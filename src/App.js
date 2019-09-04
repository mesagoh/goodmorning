import React, {Component} from 'react';
import './App.css';
import Unsplash , {toJson} from 'unsplash-js';

const searchKeyword = "nature"

const unsplash = new Unsplash({
  applicationId: "3039697e14f11da7d872ff9adbe6cf251f1796791d531c97c82874c8beb4ff7f",
  secret: "2f4ccf420a9a9291efc571fff88d05dc6cb4b0b90cec8a4a03a121d97062a6a3"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    }
  }

  componentDidMount = () => {
    unsplash.photos.getRandomPhoto({ width:400, height:400, query: searchKeyword})
    .then(toJson)
    .then(json => {
      this.setState({
        url: json.urls.custom
      })
       console.log(json);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="Header-Text">
          Good Morning!
        </header>
        <div className="Body-Picture">
          <img src={this.state.url} alt="unsplash"/>
        </div>
        <div className="Footer-Credits">
          Made with {"<3"} by  <a id="websiteLink" href="https://mesagoh.github.io"> Melissa Goh </a> , 2019
        </div>
      </div>
    );
  }
}

export default App;
