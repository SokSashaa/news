import React, {FC} from "react";
import {categoriesEnum, sourcesType} from "../App";

import './Header.css'

type HeaderProps = {
    categories: sourcesType[];
    setSelectedCategory: React.Dispatch<React.SetStateAction<categoriesEnum>>;
    selectedCategory: categoriesEnum
}
const Header: FC<HeaderProps> = ({categories, setSelectedCategory, selectedCategory}) => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navigation grid header__navigation">
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
            </div>
        </header>
    )
}
export default Header