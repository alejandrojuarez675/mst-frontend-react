import React from "react";
import useRoutedLogger from "utils/hooks/useRoutedLogger";
import TableList from "views/TableList";

const TableListContainer = () => {
    useRoutedLogger();

    return <TableList />
};

export default TableListContainer;