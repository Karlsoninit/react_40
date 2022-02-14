import React from "react";
import { isEqual } from "lodash";
import { SubmitButton } from "./LoginForm.styles";

const DB = [
  {
    data: {
      email: "max@gmail.com",
      password: "q43wertdsdsy123",
    },
    name: "max",
  },
  {
    email: "ben@gmail.com",
    password: "qwertdsdsy123",
    name: "ben",
  },
  {
    email: "pet@gmail.com",
    password: "qwerdsty123",
  },
  {
    email: "den@gmail.com",
    password: "qwerty123",
  },
  {
    email: "bob@gmail.com",
    password: "qwerty123",
  },
];

const USER_INITIAL_STATE = {
  userInfo: {
    email: "",
    password: "",
  },
  error: false,
};

class LoginForm extends React.Component {
  state = { ...USER_INITIAL_STATE };

  onHandleSubmit = (evt) => {
    evt.preventDefault();
    console.log("this.state", this.state);

    const permission = DB.find((user) =>
      isEqual(this.state.userInfo, user.data)
    );

    // const permission = DB.some((user) => isEqual(this.state.userInfo, user));
    if (!permission) {
      this.setState({ error: true });
    }

    if (!this.state.error) {
      this.props.getPermission(permission);
      this.reset();
    }
  };

  onHandleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState((prevState) => ({
      userInfo: { ...prevState.userInfo, [name]: value },
    }));
  };

  reset = () => {
    this.setState({ ...USER_INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state.userInfo;
    console.log("this.state", this.state.userInfo);
    return (
      <form onSubmit={this.onHandleSubmit}>
        <input
          name="email"
          type="email"
          onChange={this.onHandleChange}
          value={email}
        />
        <input
          name="password"
          type="password"
          onChange={this.onHandleChange}
          value={password}
        />
        <SubmitButton type="submit" isError={this.state.error}>
          отправить
        </SubmitButton>
      </form>
    );
  }
}

export default LoginForm;
