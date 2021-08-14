const userReducer = (state: any = {}, action: any) => {
  if (action.type === "GET_USER") {
    return action.payload;
  }
  return state;
};

export default userReducer;
