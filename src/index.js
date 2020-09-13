import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { I18nProvider, LOCALES} from './i18n';

ReactDOM.render(
  <I18nProvider locale={LOCALES.ENGLISH}>
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  </I18nProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
