export  function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then((res) => res.json())
        .then((repos) => {
            if (!repos.items) {
            throw new Error(repos.message)
            }
            return repos.items
    })
}