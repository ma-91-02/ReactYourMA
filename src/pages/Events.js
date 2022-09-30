import React from "react";
import { useTranslation } from "react-i18next";
import "./Events.scss";
import MainTitle from "../components/mainTitle/MainTitle";
import event from "../images/events.png";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div className="events" id="events">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <MainTitle>{t("latestEvents")}</MainTitle>
      <div className="container">
        <img src={event} alt="" />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span id="days"></span>
              <span>{t("days")}</span>
            </div>
            <div className="unit">
              <span id="hours"></span>
              <span>{t("hours")}</span>
            </div>
            <div className="unit">
              <span id="minutes"></span>
              <span>{t("minutes")}</span>
            </div>
            <div className="unit">
              <span id="seconds"></span>
              <span>{t("seconds")}</span>
            </div>
          </div>
          <h2 className="title">{t("eventTitle1")}</h2>
          <p className="description">
            {t("eventContent1")}
            <br />
            <a href="{{url('/frontEnd')}" target="_blank">
              {t("moreCours")}
            </a>
          </p>
        </div>
        {/* <!-- <div className="subscribe">
            <form action="">
              <input type="email" placeholder="{t('enterYourEmail')}" />
              <input type="submit" value="{t('subscribe')}" />
            </form>
          </div> --> */}
      </div>
    </div>
  );
};

export default Events;
