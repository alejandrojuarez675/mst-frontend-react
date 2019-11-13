import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import Dashboard from "./../views/Dashboard";


const DashboardContainer = () => {
  useRoutedLogger();

  return <Dashboard />;
};

export default DashboardContainer;
