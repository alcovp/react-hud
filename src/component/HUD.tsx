import React, {CSSProperties, PropsWithChildren, useReducer} from 'react';
import {context, initialState, reducer} from '../state';
import BottomLeft from './layout/BottomLeft';
import Slot from './layout/Slot';

const HUD = (props: PropsWithChildren) => {
    const {
        children,
    } = props;
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
    );
    const {
        components,
    } = state;

    return <context.Provider value={[state, dispatch]}>
        {children}
        <div style={HUDLayerCSS}>
            <BottomLeft>
                {components.map((component, index) => <Slot key={index}>
                    {component}
                </Slot>)}
            </BottomLeft>
        </div>
    </context.Provider>
};

export default HUD;

const HUDLayerCSS: CSSProperties = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
}