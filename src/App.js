import React, {Component} from 'react';
import './App.css';
import Unsplash , {toJson} from 'unsplash-js';
import ImageCredits from './ImageCredits';

const unsplash = new Unsplash({
  applicationId: "3039697e14f11da7d872ff9adbe6cf251f1796791d531c97c82874c8beb4ff7f",
  secret: "2f4ccf420a9a9291efc571fff88d05dc6cb4b0b90cec8a4a03a121d97062a6a3"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      username: "",
      userlink: "",
      searchKeyword: "new year"
    }
  }

  onClickHandler = () => {
    if (navigator.share) {
      navigator.canShare({
        title: "mesa's page", 
        url: 'https://mesagoh.github.io'
      }).then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
    } else {
      console.log("not shareable!");
    }
  }

  componentDidMount = () => {
    unsplash.photos.getRandomPhoto({ width:400, height:400, query: this.state.searchKeyword})
    .then(toJson)
    .then(json => {
      this.setState({
        url: json.urls.custom,
        username: json.user.name,
        userlink: json.links.html
      })
       console.log(json);
       console.log(this.state.username);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          Good Morning POTD
        </header>
        <div className="body">
        <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">

          <img 
          src={this.state.url} 
          alt={this.state.searchKeyword} 
          onClick={this.onClickHandler}
          />
        </a>

          <ImageCredits
            username={this.state.username}
            userlink={this.state.userlink}
          />
        </div>
        <div className="footer">
          Made with {"<3"} by  <a id="websiteLink" href="https://mesagoh.github.io"> Melissa Goh </a> , 2019
        </div>
      </div>
    );
  }
}

export default App;
