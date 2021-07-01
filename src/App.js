import React from "react";
import { Route, Switch } from "react-router";
import Header from "./component/Header";
import Login from "./component/Login";
// import ProctectedRoute from "./component/ProctectedRoute";
import Register from "./component/Register";
import StreamEdit from "./component/View";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
