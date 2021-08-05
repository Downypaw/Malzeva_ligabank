import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
          <img className="header__logo" src="img/logo.svg" alt="Логотип Лига Банк" width="149" height="26"/>
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <a className="header__navigation-link" href="#">
                Услуги
              </a>
            </li>
            <li className="header__navigation-item">
              <a className="header__navigation-link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="header__navigation-item">
              <a className="header__navigation-link" href="#">
                Конвертер валют
              </a>
            </li>
            <li className="header__navigation-item">
              <a className="header__navigation-link" href="#">
                Контакты
              </a>
            </li>
            <li className="header__navigation-item">
              <a className="header__navigation-link" href="#">
                Задать вопрос
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__login">
          <a className="header__login-link" href="#">Войти в Интернет-банк</a>
        </div>
      </div>
    </header>
  );
}
