import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Confirm from "./Confirm";
// import Header from "./components/Header/";
import Carousel from "./components/Carousel";

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
