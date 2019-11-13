import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import UserProfile from "views/UserProfile";

const UserProfileContainer = () => {
    useRoutedLogger();

    return <UserProfile />;
};

export default UserProfileContainer;