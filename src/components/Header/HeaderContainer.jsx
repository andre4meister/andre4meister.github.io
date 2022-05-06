import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {auth, logout} from '../../Redux/auth-reducer'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth();
  } 
  render() {
    return ( <Header {...this.props}/>);
  }
}
let mapStateToprops = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToprops, {auth, logout})(HeaderContainer);
