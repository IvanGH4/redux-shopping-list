const initialState = [
  {
    id: 1,
    name: "Pepsi",
    done: false,
    category: "Beverage",
  },
  {
    id: 2,
    name: "Coke",
    done: false,
    category: "Beverage",
  },
];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return [...state.filter((item) => item.id !== action.payload)];
    case "CHECK_ITEM":
      return [
        ...state.map((item) => {
          if (item.id === action.payload) {
            item.done = !item.done;
            return item;
          } else {
            return item;
          }
        }),
      ];
    case "REMOVE_ALL_ITEMS":
      return [...state.filter((item) => item.category !== action.payload)];
    // item.id === action.payload ? { ...item, done: !item.done } : item
    default:
      return state;
  }
};

export default itemReducer;
