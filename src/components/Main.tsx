import React, {FC} from "react";
import "./Main.css"
import BigArticle from "./BigArticle";
import {categoriesEnum, itemType, sourcesType} from "../App";


type MainProps = {
    newsArray: itemType [],
    selectedCategory: categoriesEnum,
    sourcesArray: sourcesType[],
    nameCategory: string
};


const Main: FC<MainProps> = ({newsArray, selectedCategory, sourcesArray, nameCategory}) => {


    return (
        <section className="articles">
            <div className="container grid">
                <section className="articles__big-column">
                    {newsArray.filter(item =>
                        item.category_id === selectedCategory).map(item => <BigArticle key={item.id}
                                                                                       itemArticle={item}
                                                                                       sourcesArray={sourcesArray}
                                                                                       nameActiveCategory={nameCategory}></BigArticle>
                    )}
                </section>
            </div>
        </section>
    )
}


export default Main