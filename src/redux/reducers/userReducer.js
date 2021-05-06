const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, ...action.payload };
    case "UPDATE_USER":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default userReducer;
