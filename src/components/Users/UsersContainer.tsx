import { connect } from "react-redux";
import {
  followSuccess,
  setCurrentPage,
  unfollowSuccess,
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow
} from "../../Redux/users-reducer.ts";
import Users from "./Users.tsx";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getAllUsers } from "../../Redux/users-selectors.ts";
import {UserType} from "../../types/types";
import {AppReducerType} from "../../Redux/redux-store";

type MapStatePropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    users: UserType[]
    followingInProgress: any[]
}
type MapDispatchPropsType = {
    getUsers: (pageNumber: number, pageSize: number)=> void
    setCurrentPage: (pageNumber: number)=> void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: () => void
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
}
type OwnStatePropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnStatePropsType

class UsersApiComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number): void => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
          <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? (
          <Preloader isFetching={this.props.isFetching} />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppReducerType): MapStatePropsType => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.Component>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnStatePropsType, AppReducerType>(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
  }),
  withAuthRedirect
)(UsersApiComponent);