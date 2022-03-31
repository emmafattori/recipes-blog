import React from "react";
const Article = ({ article }) => {
    const { name, featuredImage, description } = article.fields
    return (
        <div className="post">
            <h2 className="title">{name}</h2>
            {featuredImage && <img className="featuredImage" src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section className="">{description}</section>

        </div>
    )
}

export default Article