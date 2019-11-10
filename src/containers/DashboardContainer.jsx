import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Dashboard from "./../views/Dashboard";
import { setRoute } from "../actions/routerActions";

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const onSetRoute = useCallback(text => dispatch(setRoute(text)), [dispatch]);
  return <Dashboard setRoute={onSetRoute} />;
};

export default DashboardContainer;
