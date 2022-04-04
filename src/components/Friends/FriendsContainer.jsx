import { connect } from "react-redux";
import Friends from "./Friends";

// const FriendsContaine = (props) => {
//   return (
//   <StoreContext.Consumer>
//     {(store) => {
//       let friends = store.getState().sideBar;
//       return (<Friends friends={friends} />);
//     }}
//   </StoreContext.Consumer>);
// };

let mapStateToProps = (state) => {
  return {
      friends: state.sideBar,
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
