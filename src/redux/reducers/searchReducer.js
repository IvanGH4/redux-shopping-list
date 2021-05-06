import { produce } from "immer";

const searchReducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return (draft = action.payload);
  }
}, "");

export default searchReducer;
