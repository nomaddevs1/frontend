import React from "react";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import PostCreate from "./PostCreate";

const StreamEdit = () => {
  const user = useSelector((state) => state.user._id || state.user.id);
  return (
    <div className="ui internally celled grid">
      <div className="row">
        <div className="eight wide column">
          <Posts />
        </div>
        {user ? (
          <div className="five wide column">
            <PostCreate />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StreamEdit;
