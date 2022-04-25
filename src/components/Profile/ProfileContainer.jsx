import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile} from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} />;
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

let AuthRedirectComponent = withAuthRedirect(WithRouter);


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);
