import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'

export default function GridLayout({reposByLanguage}) {
    return (
        <ul className="grid space-around">
            {
                reposByLanguage.map((repository, index) => {
                    const { name, owner, html_url, stargazers_count, forks, open_issues } = repository
                    const { login, avatar_url } = owner
                    const rank = index + 1
                    return (
                    <Repository
                        key={name}                            
                        rank={rank}    
                        name={name}
                        owner={owner}
                        html_url={html_url}
                        stargazers_count={stargazers_count}
                        forks={forks}
                        open_issues={open_issues}
                        login={login}
                        avatar_url={avatar_url}
                    />)
                })
            }
        </ul>
    )
}

GridLayout.propTypes = {
    reposByLanguage: PropTypes.array.isRequired
}

/**
 * a component for repositories
 */
function Repository({
    rank,
    name,
    owner,
    html_url,
    stargazers_count,
    forks,
    open_issues,
    login,
    avatar_url
}) {

    return (
        <li>
        <h4 className="header-lg center-text">
            #{rank}
        </h4>
        <img
            className="avatar"
            src={avatar_url}
            alt={`Avatar for ${login}`}
        />
        <h2 className="center-text">
            <a className="link" href={html_url}>{ login }</a>
        </h2>
        <ul>
            <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a href={`https://github.com/${login}`}>{login }</a>
            </li>
            <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {stargazers_count.toLocaleString()} stars
            </li>
            <li>
                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                {forks.toLocaleString()} forks
            </li>
            <li>
                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                {open_issues.toLocaleString()} open issues
            </li>
        </ul>
    </li>
    )
}

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    owner: PropTypes.object.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    open_issues: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
}