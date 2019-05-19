import React, { Component } from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default class Confirm extends Component<IProps> {
  public static defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay	"
  };

  private handleCancelClick = () => {
    this.props.onOkClick();
  };

  private handleOkClick = () => {
    this.props.onCancelClick();
  };

  public render() {
    return (
      <div
        className={
          this.props.open ? "confirm-wrapper confirm-visible" : "cofirm-wrapper"
        }
      >
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button onClick={this.handleCancelClick} className="confirm-cancel">
              {this.props.cancelCaption}
            </button>
            <button onClick={this.handleOkClick} className="confirm-ok">
              {this.props.okCaption}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
