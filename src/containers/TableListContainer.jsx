import React from "react";
import useRouteLogger from "utils/hooks/useRouteLogger";
import TableList from "views/TableList";

const TableListContainer = () => {
    useRouteLogger();

    return <TableList />
};

export default TableListContainer;