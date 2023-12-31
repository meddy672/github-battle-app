/**
 * 
 * returns an array of popular repositories by language
 */
export function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then((response) => response.json())
        .then(({ items, message }) => {
            if (!items) {
                throw new Error(message)
            }
            
            return items
    })
}