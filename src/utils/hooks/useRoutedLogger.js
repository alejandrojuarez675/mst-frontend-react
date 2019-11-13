import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setRoute } from "../../actions/routerActions";


const useRoutedLogger = () => {
    const dispatch = useDispatch();
    const onSetRoute = useCallback(
        text => dispatch(setRoute(text)),
        [dispatch]
    );
    
    onSetRoute(window.location.href);
};

export default useRoutedLogger;