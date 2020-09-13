import React, { useState } from 'react';
import './index.scss';

import translate from '../i18n/translate'

import logoEN from '../assets/vacENwhite.svg';
import logoFR from '../assets/vacFRwhite.svg';
import mapleleaf from '../assets/vectormapleleaf.svg';
import globe from '../assets/vectorglobe.svg';
import mvalogo from '../assets/vectormvalogo.svg';
import { I18nProvider, LOCALES } from '../i18n';

function Headerbanner() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  
    return (
      <I18nProvider locale={ locale }>
      <div className="headerbanner__container">
        <div className="headerbanner__logo">
          <img src={logoEN} alt="VAC Logo" />
        </div>
        <div className="headerbanner__navigation">
          <ul>
            <li>
              <button onClick={() => setLocale(LOCALES.ENGLISH)}>
              ENGLISH
              </button>
              <button onClick={() => setLocale(LOCALES.FRENCH)}>
              FRANÇAIS
              </button>
            </li>
            <li>
              { translate('my vac account', {icon: <img src={mvalogo} alt="My VAC Account Icon" />})}
            </li>
          </ul>
        </div>
      </div>
      </I18nProvider>
    );
}

export default Headerbanner;