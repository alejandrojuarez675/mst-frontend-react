import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import Notifications from "views/Notifications";

const NotificationContainer = () => {
    useRouteLogger();

    return <Notifications />;
};

export default NotificationContainer;