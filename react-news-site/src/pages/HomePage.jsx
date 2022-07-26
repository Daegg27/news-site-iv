import ArticleList from "../components/ArticleList"
import Search from "../components/Search"
import {useState, useEffect} from 'react'
import { fetchArticles } from "../api/ArticlesAPI"


function HomePage ({articles}){

    const[searchTerm, setSearchTerm] = useState(null)

    // useEffect(fetchArticles(searchTerm), [searchTerm])
    

    return (
        <div>
            <Search articles={articles}/>
            <hr/>
            <h2>All Articles</h2>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage