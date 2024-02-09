import React, {FC} from "react";
import "./Footer.css"
import {categoriesEnum, sourcesType} from "../App";

import {HeaderProps} from "./Header";

const Footer: FC<HeaderProps> = ({categories, setSelectedCategory, selectedCategory}) => {
    return (<footer className="footer">
        <div className="container">
            <nav className="navigation grid footer__navigation">
                <p className="navigation__logo" onClick={() => setSelectedCategory(categoriesEnum.index)}>
                    <img className="navigation__image" src="logo.svg" alt="Логотип"/>
                </p>
                <ul className="navigation__list">
                    {categories.map(item =>
                        <li className="navigation__item" key={item.id}>
                            <p className={`navigation__link ${item.id === selectedCategory ? "navigation__link--active" : ''}`}
                               onClick={() => setSelectedCategory(item.id)}>
                                {item.name}
                            </p>
                        </li>)}
                </ul>
            </nav>

            <div className="footer__column">
                <p className="footer__text">Сделано мною в <a href="#" target="_blank" className="footer__link">моей
                    комнате</a></p>
                <p className="footer__copyright">© 2021</p>
            </div>
        </div>
    </footer>)
}


export default Footer