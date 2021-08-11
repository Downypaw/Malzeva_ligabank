import React from 'react';

export default function Header() {
  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <img className="page-header__logo" src="img/logo.svg" alt="Логотип Лига Банк" width="149" height="26"/>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Услуги
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Конвертер валют
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Контакты
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Задать вопрос
              </a>
            </li>
          </ul>
        </nav>
        <div className="page-header__login">
          <a className="page-header__login-link" href="#">Войти в Интернет-банк</a>
        </div>
      </div>
    </header>
  );
}
