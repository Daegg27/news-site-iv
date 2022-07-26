import axios from 'axios'


async function fetchArticleByID(articleID){

    // const date = Math.floor(Date.now() / 1000) - 86400
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params:{
            tags: 'story_'+articleID
        }

    })

    return response
}

async function fetchArticleBySection(section){
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params:{
            tags: section
        }

    })

    return response
}

async function fetchArticles(filters = null){

    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params:{
            query: filters,
            tags: "story"
        }

    })

    return response.data.hits

}

export {
    fetchArticleByID,
    fetchArticleBySection,
    fetchArticles
}