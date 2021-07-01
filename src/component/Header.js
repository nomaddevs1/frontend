import React, { useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, googleSigin } from "../action/index";
import { logout } from "./../action/index";
import jwt_decode from "jwt-decode";

const Header = ({ fetchUser, userId, logout, googleSigin }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  let id = JSON.parse(localStorage.getItem("Token"));
  useEffect(() => {
    if (id?.token) {
      const decode = jwt_decode(id.token);

      if (Date.now() > decode.exp * 1000) {
        logout();
      }
    }
  }, [id?.token, pathname, logout]);
  useEffect(() => {
    fetchUser();
    // console.log(jwt_decode(id));
  }, [fetchUser]);

  const logOut = () => {
    logout(history);
  };

  const renderRegisterOrInput = () => {
    return pathname === "/login" ? (
      <div>
        <NavLink to="/register">or Register with email or password</NavLink>
      </div>
    ) : (
      <span>
        <NavLink to="/login">or Login with password</NavLink>
      </span>
    );
  };
  return (
    <>
      <div className="ui secondary pointing  menu">
        <NavLink to="/" className="item">
          Streamer
        </NavLink>
        <div className="right menu">
          {!!id ? (
            <button className="ui red button" onClick={logOut}>
              logOut
            </button>
          ) : (
            <>
              {/* Make sure whenever the page is reloaded it does'nt show sign in even though user is already signed in  */}

              {/* {userId ? (
                <button className="ui red button">
                  {" "}
                  <i className="google icon" />
                  Sign out
                </button>
              ) : (
                <>
                  <button className="ui green button" onClick={googleSigin}>
                    {" "}
                    <i className="google icon" />
                    Sign in
                  </button>{" "} */}
              {renderRegisterOrInput()}
            </>
          )}
          {/* )} */}
          {/* </> */}
          {/* )}
          )} */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => {
  return { userId: user?.token || user?._id };
};
export default connect(mapStateToProps, { fetchUser, logout, googleSigin })(
  Header
);
