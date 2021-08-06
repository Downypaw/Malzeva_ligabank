import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="page-footer__container container">
        <div className="page-footer__left">
          <img className="page-footer__logo" src="img/logo.svg" alt="Логотип Лига Банк" width="150" height="27"/>
          <p className="page-footer__information">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019
          </p>
        </div>
        <div className="page-footer__menu">
        <ul className="page-footer__menu-list">
          <li className="page-footer__menu-item">
            <a className="page-footer__menu-link" href="#">
              Услуги
            </a>
          </li>
          <li className="page-footer__menu-item">
            <a className="page-footer__menu-link" href="#">
              Рассчитать кредит
            </a>
          </li>
          <li className="page-footer__menu-item">
            <a className="page-footer__menu-link" href="#">
              Контакты
            </a>
          </li>
          <li className="page-footer__menu-item">
            <a className="page-footer__menu-link" href="#">
              Задать вопрос
            </a>
          </li>
        </ul>
        </div>
        <div className="page-footer__details">
          <span className="page-footer__code">*0904</span>
          <p className="page-footer__description">
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className="page-footer__phone">
          <a className="page-footer__phone-number" href="tel:+78001112233">8 800 111 22 33</a>
          <p className="page-footer__postscript">
            Бесплатный для всех городов России
          </p>
        </div>
        <ul className="page-footer__socials socials">
          <li className="socials__item">
            <a className="socials__link socials__link--facebook" href="#">
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link socials__link--instagram" href="#">
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link socials__link--twitter" href="#">
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link socials__link--youtube" href="#">
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
