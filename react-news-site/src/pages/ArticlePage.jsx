import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Article from '../components/Article'
import {fetchArticleByID} from '../api/ArticlesAPI.jsx'

function ArticlePage ({articles}){

    let {articleID} = useParams()

    const [article, setArticle] = useState(null)

    useEffect(() => {
        fetchArticleByID(articleID).then((response) => {
            console.log(response)
            setArticle(response.data.hits[0])
        })
    }, [articleID])

    // const article = articles[articleID-1] // -1 because we added 1 in the url to make it restful

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage