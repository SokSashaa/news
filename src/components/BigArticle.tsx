import React, {FC} from "react";
import {itemType, sourcesType} from "../App";


type bigArticleProps = {
    itemArticle: itemType,
    sourcesArray: sourcesType[],
    nameActiveCategory: string
}


const BigArticle: FC<bigArticleProps> = ({itemArticle, sourcesArray, nameActiveCategory}) => {
    return (<article className="main-article">
        <div className="main-article__image-container">
            <img className="main-article__image" src={itemArticle.image} alt="Фото новости"/>
        </div>
        <div className="main-article__content">
            <span
                className="article-category main-article__category">{nameActiveCategory}</span>
            <h2 className="main-article__title">{itemArticle.title}</h2>
            <p className="main-article__text">{itemArticle.description}</p>
            <span
                className="article-source main-article__source">{sourcesArray.find(item => itemArticle.source_id === item.id)?.name}</span>
        </div>
    </article>)
};


export default BigArticle