import React, {CSSProperties, PropsWithChildren} from 'react';

const Slot = (props: PropsWithChildren) => {
    const {
        children,
    } = props;

    return <div style={slotCSS}>
        {children}
    </div>
};

export default Slot;

const slotCSS: CSSProperties = {
    pointerEvents: 'all',
}