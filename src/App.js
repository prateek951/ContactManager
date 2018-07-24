import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact/>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
