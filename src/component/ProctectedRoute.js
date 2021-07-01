import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const result = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        result ? (
          <Component {...props} user={result.displayName} />
        ) : (
          <div>
            {" "}
            You are not signed in. please click on the google button to view
            content
          </div>
        )
      }
    />
  );
};

export default ProtectedRoutes;
