import React from 'react';
import './index.scss';

import translate from '../i18n/translate';
import canadaLogo from '../assets/Canada_wordmark.svg';

const Footerbanner = () => {

  return(
    <div className="footerbanner__container">
      <div className="footerbanner__list">
        <li>
        { translate('help')}
        </li>
        <li>
          { translate('social media') }
        </li>
        <li>
          { translate('mobile applications') }
        </li>
        <li>
          { translate('terms and conditions') }
        </li>
        <li>
          { translate('privacy') }
        </li>
      </div>
      <div className="footerbanner__logo">
        <img src={canadaLogo} alt="Canada Text with Flag"/>
      </div>
    </div>

  );
}

export default Footerbanner