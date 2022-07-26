import ArticleTeaser from "./ArticleTeaser"

function ArticleList ({articles}) {
    
   

    return(
        <div>
            {articles.map((article) => (
                <ArticleTeaser key={article.objectID} {...article}/>
                ))
            }
        </div>
    )
}

export default ArticleList

