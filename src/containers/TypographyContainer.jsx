import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import Typography from "views/Typography";

const TypographyContainer = () => {
    useRouteLogger();

    return <Typography />
};

export default TypographyContainer;