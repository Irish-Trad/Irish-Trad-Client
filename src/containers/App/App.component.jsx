import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import Footer from "../../components/Footer/Footer.component";
import Homepage from "../../pages/Homepage/Homepage.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelected: "homepage"
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
