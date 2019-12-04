import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { register as registerServiceWorker } from 'utils/serviceWorker';
import 'index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
