import React from "react";
import LayoutManager from "./components/LayoutManager";

class App extends React.Component {
  state = {
    pathname: false,
    userName: this.props.name,
  };

  getPermission = (data) => {
    this.setState({ pathname: data.data, userName: data.name });
  };

  render() {
    return (
      <>
        <LayoutManager
          pathname={this.state.pathname}
          name={this.state.userName}
          getPermission={this.getPermission}
        />
      </>
    );
  }
}

export default App;
