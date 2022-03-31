import React from "react";
import Article from '../components/Article'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((article, idx) => {
                return (
                    <Article article={article} key={idx} />
                )
            })}
        </div>
    )
}

export default Posts



