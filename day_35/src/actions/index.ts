const getUser = () => {
  return (dispatch: any) => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((body) => dispatch({ type: "GET_USER", payload: body }));
  };
};

export { getUser };
