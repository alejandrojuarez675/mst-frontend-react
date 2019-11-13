import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import Notifications from "views/Notifications";

const NotificationContainer = () => {
    useRoutedLogger();

    return <Notifications />;
};

export default NotificationContainer;