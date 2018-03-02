import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="Steven"/>, document.getElementById('root'));
registerServiceWorker();
