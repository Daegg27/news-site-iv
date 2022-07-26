import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ArticleList from '../components/ArticleList'

import {fetchArticleBySection} from '../api/ArticlesAPI.jsx'

function SectionPage ({articles}){

    const { sectionName } = useParams()
    const [sectionArticles, setSectionArticles] = useState([])


    useEffect( () => {
            fetchArticleBySection(sectionName)
            .then((response) => {
                setSectionArticles(response.data.hits)
                console.log(response)
        })

        
        
        
    }, [sectionName])
    

    return(
        <div>
        {sectionArticles 
            ? <ArticleList articles={sectionArticles} />
            : 'no articles found'
        
        }
        </div>
    )
}

export default SectionPage