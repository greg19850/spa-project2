import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

function AdminPage() {
  return (
    <Route render={() => (
      permission ? <h3> Welcome to Admin Panel :)</h3> : <Redirect to="/login" />
    )} />
  );
}

export default AdminPage;