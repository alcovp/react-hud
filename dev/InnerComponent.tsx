import React from 'react';
import {Snackbar} from '@mui/material';
import {useHUD} from '../src';

const InnerComponent = () => {
    const {display} = useHUD();

    const displayText = () => {
        display(<span>ALALA</span>);
    }

    const displayMaterialSnackBar = () => {
        display(<Snackbar
            open={true}
            message='ALALALA'
        />);
    }

    return <>
        {'The HUD is out there...'}
        <button onClick={displayText}>Display text</button>
        <button onClick={displayMaterialSnackBar}>Display material Snackbar</button>
    </>
};

export default InnerComponent;