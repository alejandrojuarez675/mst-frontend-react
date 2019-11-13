import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setRoute } from "../../actions/routerActions";


const useRouteLogger = () => {
    const dispatch = useDispatch();
    const onSetRoute = useCallback(
        text => dispatch(setRoute(text)),
        [dispatch]
    );
    
    onSetRoute(window.location.href);
};

export default useRouteLogger;