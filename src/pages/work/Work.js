import React from "react";
import { useTranslation } from "react-i18next";
import './Work.scss';
import ws from './imgs/work-steps.png';
import ws1 from './imgs/work-steps-1.png';
import ws2 from './imgs/work-steps-2.png';
import ws3 from './imgs/work-steps-3.png';
const Work =()=>{
    const { t } = useTranslation();
return (
    <div className="workSteps" id="work-steps">
    <h2 className="main-title">{t('howItWork')}</h2>
    <div className="container">
      <img src={ws} alt="work steps" height="50%" width="50%"className="image" />
      <div className="info">
        <div className="box">
          <img src={ws1} alt="work1" height="100%" width="100%" />
          <div className="text">
            <h3>{t('businessAnalysis')}</h3>
            <p>
            {t('businessAnalysisContent')}
            </p>
          </div>
        </div>
        <div className="box">
          <img src={ws2} alt="work2"height="100%" width="100%" />
          <div className="text">
            <h3>{t('businessDesign')}</h3>
            <p>
            {t('businessDesignContent')}
            </p>
          </div>
        </div>
        <div className="box">
          <img src={ws3} alt="work3"height="100%" width="100%" />
          <div className="text">
            <h3>{t('Developement')}</h3>
            <p>
            {t('DevelopementContent')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Work;