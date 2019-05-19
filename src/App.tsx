import React from "react";
// import Header from "./components/Header/";
import Carousel from "./components/Carousel";

import "normalize.css";
import "./App.css";

interface IState {
  confirmOpen: boolean;
}

class App extends React.Component<{}, IState> {
  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
  };

  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
  };

  public render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default App;
