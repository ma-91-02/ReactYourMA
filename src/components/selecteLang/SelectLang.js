import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import GlobeIcon from './GlobelIcon'

import './SelectLang.scss';
const languages = [
  {
    code: 'ru',
    name: 'Русский',
    country_code: 'ru',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]

const SelectLang =  () => {
    // multi lang
    const currentLanguageCode =  cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation();
  
    useEffect(() =>  {
      // async ()=>{

        document.body.dir =  currentLanguage.dir || 'ltr'
        document.title = t('app_title')
      // }
      // console.log('Setting page stuff')
    }, [currentLanguage, t])
    return (
        <div className="language-select" style={{position:"relative",zIndex:"999"}} >
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{color:"#fff"}}
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <Link style={{position:"relative"}}
                    to={code}
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,position:"relative"
                      }}
                    ></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      );
    };
    
    export default SelectLang;