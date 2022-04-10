import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC, unfollowAC } from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersApiComponent extends React.Component {
    componentDidMount() {
      this.props.toggleIsFetching(true);
      if (this.props.users.length === 0) {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
  
        });
      }
    }
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
        });
    }
    render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = [];
      for( let i = 1; i <= pagesCount; i++) {
        pages.push(i)
      }
  
      return <>
        {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        />

      </>
      
    }
  }

const mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC (totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);