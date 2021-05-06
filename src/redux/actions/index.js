export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export const checkItem = (id) => {
  return {
    type: "CHECK_ITEM",
    payload: id,
  };
};

export const removeAllItems = (category) => {
  return {
    type: "REMOVE_ALL_ITEMS",
    payload: category,
  };
};

export const setSearch = (text) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: text,
  };
};

export const addCategory = (category) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};

export const removeCategory = (category) => {
  return {
    type: "REMOVE_CATEGORY",
    payload: category,
  };
};

export const addUser = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};

export const updateUser = (username) => {
  return {
    type: "UPDATE_USER",
    payload: username,
  };
};
