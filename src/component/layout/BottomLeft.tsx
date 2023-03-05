import React, {CSSProperties, PropsWithChildren} from 'react';

const BottomLeft = (props: PropsWithChildren) => {
    const {
        children,
    } = props;

    return <div style={bottomLeftCSS}>
        {children}
    </div>;
};

export default BottomLeft;

const bottomLeftCSS: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
}