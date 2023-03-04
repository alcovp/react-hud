import React from 'react';

interface IProps {
    uselessProp: string
}

const HUD = (props: IProps) => {
    const {
        uselessProp,
    } = props;

    return <div>
        <h1>{'Hello ' + uselessProp}</h1>
    </div>;
};

export default HUD;