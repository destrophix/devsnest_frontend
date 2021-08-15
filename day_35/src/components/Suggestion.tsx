import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";

const Suggestion = () => {
  const user: any = useSelector<any>((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="suggestion">
      <div className="userInfo">
        <img className="option profile" alt="option" src={user.profile}></img>
        <div className="user">{user.username}</div>
      </div>
      <div className="suggested">
        <h2>Suggestions for you.</h2>
      </div>
    </div>
  );
};

export default Suggestion;
