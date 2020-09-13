import React, { useState } from 'react';
import './index.scss';

// import Headerbanner from '../headerbanner';
import Landingpage from '../landingpage';
import Footerbanner from '../footerbanner';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate'

import logoEN from '../assets/vacENwhite.svg';
import logoFR from '../assets/vacFRwhite.svg';
import mapleleaf from '../assets/vectormapleleaf.svg';
import globe from '../assets/vectorglobe.svg';
import mvalogo from '../assets/vectormvalogo.svg';

function Main() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

    return(
      <I18nProvider locale={ locale }>
        <main className="main__container">
          <div className="main__header">
            <div className="headerbanner__container">
              <div className="headerbanner__logo">
                <img src={logoEN} alt="VAC Logo" />
              </div>
              <div className="headerbanner__navigation">
                <ul>
                  <li>
                    CANADA.CA <img src={mapleleaf} alt="Maple Leaf" />
                  </li>
                  <li>
                    <button onClick={() => setLocale(LOCALES.ENGLISH)}>
                    ENGLISH
                    </button>
                    <button onClick={() => setLocale(LOCALES.FRENCH)}>
                    FRANÇAIS
                    </button>
                    <img src={globe} alt="Bilingual Icon" />
                  </li>
                  <li>
                    { translate('my vac account', {icon: <img src={mvalogo} alt="My VAC Account Icon" />})}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main__body">
            <Landingpage />
      </div>
          <div className="main__footer">
            <Footerbanner />
          </div>
        </main>
      </I18nProvider>
    )
}

export default Main;