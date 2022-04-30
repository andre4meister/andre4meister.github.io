import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatus, updateStatus} from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userId);
    this.props.getStatus(this.props.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} 
      updateStatus={this.props.updateStatus} status={this.props.status} />;
  }
};

const WithRouter = props => {
  const params = useParams();
  return (
      <ProfileContainer
          {...props}
          params={params}
          isAuth={props.isAuth}
      />
  );
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect
)(WithRouter)
