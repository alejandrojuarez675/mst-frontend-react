import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import UserProfile from "views/UserProfile";

const UserProfileContainer = () => {
    useRouteLogger();

    return <UserProfile />;
};

export default UserProfileContainer;