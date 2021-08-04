import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="#">
              <img className="header__logo" src="img/logo.svg" alt="Логотип Лига Банк" />
            </a>
          </div>
          <nav className="header__navigation navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a className="navigation__link">
                  Услуги
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">
                  Рассчитать кредит
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">
                  Конвертер валют
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">
                  Контакты
                </a>
              </li>
              <li className="navigation__item">
                <a className="navigation__link">
                  Задать вопрос
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__login">
            <a className="header__logo-link" href="#">Войти в Интернет-банк</a>
          </div>
        </div>
      </div>
    </header>
  );
}
