import React from 'react'
import {createRoot} from 'react-dom/client'
import {HUD} from '../src';
import InnerComponent from './InnerComponent';

const App = () => {
    return <HUD>
        <InnerComponent />
    </HUD>
}

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(<App />);
}