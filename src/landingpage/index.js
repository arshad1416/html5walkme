import React from 'react';
import './index.scss';

import translate from '../i18n/translate'

const Landingpage = () => {

  return(
    <div className="landingpage__container">
      <div className="landingpage__content">
        <div className="learningObjectives">
          <div className="columnHeading">
            {translate('learning objectives title')}
          </div>
          <ul>
            <li>{translate('learning objectives 1')}</li>
            <li>{translate('learning objectives 2')}</li>
            <li>{translate('learning objectives 3')}</li>
            <li>{translate('learning objectives 4')}</li>
          </ul>
        </div>
        <div className="desiredOutcomes">
          <div className="columnHeading">
            {translate('desired outcomes title')}
          </div>
          <ul>
            <li>{translate('desired outcomes 1')}</li>
            <li>{translate('desired outcomes 2')}</li>
            <li>{translate('desired outcomes 3')}</li>
            <li>{translate('desired outcomes 4')}</li>
            <li>{translate('desired outcomes 5')}</li>
            <li>{translate('desired outcomes 6')}</li>
            <li>{translate('desired outcomes 7')}</li>
            <li>{translate('desired outcomes 8')}</li>
          </ul>
        </div>
        <div className="introToLearning">
          <div className="columnHeading">
            {translate('intro to learning title')}
          </div>
          <ul>
            <li>{translate('intro to learning 1')}</li>
            <li>{translate('intro to learning 2')}</li>
            <li>{translate('intro to learning 3')}</li>
            <li>{translate('intro to learning 4')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Landingpage;