const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "REMOVE_CATEGORY":
      return [...state.filter((item) => item.name !== action.payload)];
    default:
      return state;
  }
};

export default categoryReducer;
