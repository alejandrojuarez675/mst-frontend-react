import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import Icons from "views/Icons";

const IconsContainer = () => {
    useRoutedLogger();

    return <Icons />
};

export default IconsContainer;