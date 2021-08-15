import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";

const Navbar = () => {
  const user: any = useSelector<any>((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loaded");

    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="navbar">
      <div className="nav">
        <img alt="option" src="/img/brand.png"></img>
        <input type="text" placeholder="Search"></input>
        <div className="options">
          <img className="option" alt="option" src="/img/home.png"></img>
          <img className="option" alt="option" src="/img/send.png"></img>
          <img className="option" alt="option" src="/img/compass.png"></img>
          <img className="option" alt="option" src="/img/heart.png"></img>
          <img className="option profile" alt="option" src={user.profile}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
