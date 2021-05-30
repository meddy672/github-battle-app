import React from 'react'
import PropTypes from 'prop-types'

/**
 * show main nav
 */
export default function MainNavigation({ selectedLang, updateListener }) {

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((reposByLanguage) => {
                return (<NavComponent
                    key={reposByLanguage}
                    reposByLanguage={reposByLanguage}
                    selectedLanguage={selectedLang}
                    update={updateListener} />)
            })}
        </ul>
    )
}

MainNavigation.propTypes = {
    selectedLang: PropTypes.string,
    updateListener: PropTypes.func.isRequired
}

/**
 *  navigation component
 */
function NavComponent({ reposByLanguage, selectedLanguage, update }) {

    return (
        <li>
            <button
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
    selectedLang: PropTypes.string,
    update: PropTypes.func.isRequired
}