import React from "react";

const array = [{ a: 2 }, { a: 3 }];

class ToggleButton extends React.Component {
  state = {
    isShow: true,
    array,
  };

  toggle = () => {
    this.setState(() => {
      return {
        isShow: !this.state.isShow,
        array: this.state.array.filter((elem) => elem.a !== 2),
      };
    });
  };

  render() {
    console.log("state", this.state);
    console.log("rerender");
    return (
      <div>
        <button onClick={this.toggle}>переключатель</button>
        <h2>{this.state.isShow ? "видно" : "не видно"}</h2>
      </div>
    );
  }
}

export default ToggleButton;
