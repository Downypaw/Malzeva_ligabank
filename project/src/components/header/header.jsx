import React from 'react';

export default function Header() {
  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <img className="page-header__logo" src="img/logo.svg" alt="Логотип Лига Банк" width="149" height="26"/>
        </div>
        <nav className="page-header__navigation">
          <ul className="page-header__navigation-list">
            <li className="page-header__navigation-item">
              <a className="page-header__navigation-link" href="#">
                Услуги
              </a>
            </li>
            <li className="page-header__navigation-item">
              <a className="page-header__navigation-link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="page-header__navigation-item">
              <a className="page-header__navigation-link" href="#">
                Конвертер валют
              </a>
            </li>
            <li className="page-header__navigation-item">
              <a className="page-header__navigation-link" href="#">
                Контакты
              </a>
            </li>
            <li className="page-header__navigation-item">
              <a className="page-header__navigation-link" href="#">
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
