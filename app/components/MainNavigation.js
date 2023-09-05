import React from 'react'
import PropTypes from 'prop-types'

/**
 * show main nav
 */
export default function MainNavigation({ selectedLanguage, updateListener }) {

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul role="navigation" className="flex-center">
            {languages.map((reposByLanguage) => {
                return (<NavComponent
                    key={reposByLanguage}
                    reposByLanguage={reposByLanguage}
                    selectedLanguage={selectedLanguage}
                    update={updateListener} />)
            })}
        </ul>
    )
}

MainNavigation.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    updateListener: PropTypes.func.isRequired
}

/**
 *  navigation component
 */
export function NavComponent({ reposByLanguage, selectedLanguage, update }) {

    return (
        <li>
            <button
                role="button"
                className="btn-clear nav-link"
                style={reposByLanguage === selectedLanguage ? { color: 'rgb(183, 46, 31)' } : null}
                onClick={() => update(reposByLanguage)}>
                {reposByLanguage}
            </button>
        </li>
    )
}

NavComponent.propTypes = {
    reposByLanguage: PropTypes.string.isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
}