import { combineReducers } from "redux";

const initialPosts = [
  { id: 1, title: "first blog", body: "first body" },
  { id: 2, title: "second blog", body: "second body" },
  { id: 3, title: "third blog", body: "third body" },
  { id: 4, title: "fourth blog", body: "fourth body" },
];

const initialUser = {
  username: "Admin",
  password: "12345",
  loggedIn: false,
};

const loginReducer = (currentUser = initialUser, action) => {
  switch (action.type) {
    case "USER_LOGGEDIN":
      if (
        currentUser.username === action.payload.username &&
        currentUser.password === action.payload.password
      ) {
        return { ...action.payload, loggedIn: true };
      }

      break;

    default:
      return currentUser;
  }
};

const postReducer = (currentPosts = initialPosts, action) => {
  switch (action.type) {
    case "POST_DELETED":
      return currentPosts.filter((post) => post.id !== action.payload.id);
    case "POST_CREATED":
      return [...currentPosts, action.payload];
    case "POST_EDITED":
      currentPosts[action.payload.id - 1] = action.payload;

      return currentPosts;

    default:
      return currentPosts;
  }
};

const selectedPostReducer = (selectedPosts = [], action) => {
  switch (action.type) {
    case "POST_SELECTED":
      const isNotInside = (post) => post.id !== action.payload.id;
      if (selectedPosts.every(isNotInside)) {
        return [...selectedPosts, action.payload];
      } else {
        return selectedPosts;
      }

    case "POST_REMOVED":
      return selectedPosts.filter((post) => post.id !== action.payload.id);
    default:
      return selectedPosts;
  }
};

const editablePostReducer = (editablePost = null, action) => {
  if (action.type === "POST_EDITED") {
    return action.payload;
  }
  return editablePost;
};

export default combineReducers({
  posts: postReducer,
  selectedPosts: selectedPostReducer,
  editablePost: editablePostReducer,
  user: loginReducer,
});
