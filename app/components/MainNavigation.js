import React from 'react'
import PropTypes from 'prop-types'

/**
 * show main nav
 */
export default function MainNavigation({ selected, update }) {

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((reposByLanguage) => {
                return (<NavComponent
                    key={reposByLanguage}
                    reposByLanguage={reposByLanguage}
                    selectedLang={selected}
                    update={update} />)
            })}
        </ul>
    )
}

MainNavigation.propTypes = {
    selected: PropTypes.string,
    update: PropTypes.func.isRequired
}

/**
 *  navigation component
 */
function NavComponent({ reposByLanguage, selectedLang, update }) {

    return (
        <li>
            <button
                className="btn-clear nav-link"
                style={reposByLanguage === selectedLang ? { color: 'rgb(183, 46, 31)' } : null}
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