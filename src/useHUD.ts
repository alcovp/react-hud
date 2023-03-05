import {ReactNode, useContext} from 'react';
import {ActionType, context} from './state';

const useHUD = (): {
    display: (component: ReactNode) => void
} => {
    const [, dispatch] = useContext(context);

    const display = (component: ReactNode) => {
        dispatch({
            type: ActionType.ADD_COMPONENT,
            component: component,
        });
    }

    return {
        display,
    };
}

export default useHUD;