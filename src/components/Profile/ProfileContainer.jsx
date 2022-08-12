import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer.ts";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(this.props.params.userId);
    this.props.getStatus(this.props.params.userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} 
      updateStatus={this.props.updateStatus} status={this.props.status} isOwner={!!this.props.params.userId}
      savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>;
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
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withAuthRedirect
)(WithRouter)
