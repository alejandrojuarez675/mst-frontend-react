import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import Typography from "views/Typography";

const TypographyContainer = () => {
    useRoutedLogger();

    return <Typography />
};

export default TypographyContainer;