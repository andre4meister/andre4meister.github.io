import  profileReducer, { addPost, deletePost} from './profile-reducer';

let state = {
  posts: [
    { id: 1, name: "Hi,how are you", like: 1 },
    { id: 2, name: "it`s my first post", like: 22 },
    { id: 3, name: "Marik", like: 10 },
    { id: 4, name: "Vova", like: 44 },
  ]};

it('new post adding', () => {
  let action = addPost('Testing this')
  // start data

    // action, what to do
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.posts.length).toBe(5);
});

it('new post adding', () => {
  let action = addPost('Testing this')
  // start data

    // action, what to do
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.posts[4].name).toBe('Testing this');
});

it('posts` length should be 3', () => {
  let action = deletePost(2)
  // start data

    // action, what to do
  let newState = profileReducer(state, action);

  // expectation
  expect(newState.posts.length).toBe(3);
});