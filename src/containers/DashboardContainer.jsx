import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import Dashboard from "./../views/Dashboard";


const DashboardContainer = () => {
  useRouteLogger();

  return <Dashboard />;
};

export default DashboardContainer;
