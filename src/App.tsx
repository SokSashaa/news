import React, {useEffect, useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import axios, {AxiosResponse} from "axios";

export enum categoriesEnum {
    index,
    tech,
    sport,
    fashion,
    politics,
    other,
    'karpov.courses'

}

type newsResponse = {
    sources: sourcesType[];
    categories: sourcesType[];
    items: itemType[];
}

export type sourcesType = {
    id: number;
    name: string;
}
export type itemType = {
    id: number;
    lang: string;
    date: string;
    title: string;
    description: string;
    image: string;
    source_id: number;
    category_id: number;
}

function App() {
    const [newsData, setNewsData] = useState<newsResponse>()

    useEffect(() => {
        axios.get('https://frontend.karpovcourses.net/api/v1/ru/news')
            .then((response: AxiosResponse) => setNewsData(response.data))
    }, [])


    const [categoryId, setCategoryId] = useState(categoriesEnum.index);

    const nameActiveCategory = newsData?.categories.find(item => item.id === categoryId)?.name || ''

    return newsData !== undefined ? (
        <>
            <Header
                categories={newsData?.categories}
                setSelectedCategory={setCategoryId}
                selectedCategory={categoryId}/>
            <Main
                selectedCategory={categoryId}
                newsArray={newsData.items}
                sourcesArray={newsData.sources}
                nameCategory={nameActiveCategory}/>
            <Footer/>
        </>

    ) : (<h1>Ошибка</h1>);
}

export default App;
