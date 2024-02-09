import React from "react";
import "./Footer.css"

function Footer(){
    return <footer className="footer">
        <div className="container">
            <nav className="navigation grid footer__navigation">
                <a href="#" className="navigation__logo"><img className="navigation__image" src="logo.svg" alt="Логотип"/></a>
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link navigation__link--active">Главная</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Мода</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Технологии</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Музыка</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Karpov</a></li>
                </ul>
            </nav>

            <div className="footer__column">
                <p className="footer__text">Сделано мною в <a href="#" target="_blank" className="footer__link">моей комнате</a></p>
                <p className="footer__copyright">© 2021</p>
            </div>
        </div>
    </footer>
}

export default Footer