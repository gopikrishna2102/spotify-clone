import React, { Component, Fragment } from "react";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <header>
          <SpotifyNavbar />
        </header>
      </Fragment>
    );
  }
}

export default App;
