import React from "react";
import "./Post.css"

class Post extends React.Component<any, any> {
    render() {
        return (
            <div className={"mainPost"}>
                <div className={"imgPost"}><img src={"image.jpg"}/></div>
                <div className={"descriptionPost"}>
                    <p>Технологии</p>
                    <h1>Отец жанра</h1>
                </div>
            </div>
        )
    }
}

export default Post