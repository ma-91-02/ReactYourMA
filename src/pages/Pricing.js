import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Pricing.module.css";
import "../index.scss";

import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.pricing} id="pricing">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">{t("pricing")}</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>{t("tp0")}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t("pp0")}</span>
            <span className={styles.time}>{t("pcsh01")}</span>
          </div>
          <ul>
            <li>{t("pcsh03")}</li>
            <li>{t("pcsh04")}</li>
            <li>{t("pcsh05")}</li>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp2')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp2')}</span>
            <span className={styles.time}>{t('pcsh21')}</span>
          </div>
          <ul>
            <li>{t('pcsh23')}</li>
            <li>{t('pcsh24')}</li>
            <li>{t('pcsh25')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div class={styles.box}>
          <div className={styles.title}>{t("tp1")}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t("pp1")}</span>
            <span className={styles.time}>{t("pcsh11")}</span>
          </div>
          <ul>
            <li>{t("pcsh13")}</li>
            <li>{t("pcsh14")}</li>
            <li>{t("pcsh15")}</li>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp3')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp3')}</span>
            <span className={styles.time}>{t('pcsh31')}</span>
          </div>
          <ul>
            <li>{t('pcsh33')}</li>
            <li>{t('pcsh34')}</li>
            <li>{t('pcsh35')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp4')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp4')}</span>
            <span className={styles.time}>{t('pcsh41')}</span>
          </div>
          <ul>
            <li>{t('pcsh43')}</li>
            <li>{t('pcsh44')}</li>
            <li>{t('pcsh45')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp5')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp5')}</span>
            <span className={styles.time}>{t('pcsh51')}</span>
          </div>
          <ul>
            <li>{t('pcsh53')}</li>
            <li>{t('pcsh54')}</li>
            <li>{t('pcsh55')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp6')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp6')}</span>
            <span className={styles.time}>{t('pcsh61')}</span>
          </div>
          <ul>
            <li>{t('pcsh63')}</li>
            <li>{t('pcsh64')}</li>
            <li>{t('pcsh65')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp7')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp7')}</span>
            <span className={styles.time}>{t('pcsh71')}</span>
          </div>
          <ul>
            <li>{t('pcsh73')}</li>
            <li>{t('pcsh74')}</li>
            <li>{t('pcsh75')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>{t('tp8')}</div>
          <div className={styles.price}>
            <span className={styles.amount}>{t('pp8')}</span>
            <span className={styles.time}>{t('pcsh81')}</span>
          </div>
          <ul>
            <li>{t('pcsh83')}</li>
            <li>{t('pcsh84')}</li>
            <li>{t('pcsh85')}</li>
            <br/><br/><br/><br/><br/><br/>
          </ul>
          <Link to="#">{t("more")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
