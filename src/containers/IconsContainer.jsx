import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import Icons from "views/Icons";

const IconsContainer = () => {
    useRouteLogger();

    return <Icons />
};

export default IconsContainer;