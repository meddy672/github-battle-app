import React from 'react'
import PropTypes from 'prop-types'

/**
 * show main nav
 */
export default function MainNavigation({ selected, update }) {

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((reposBylanguage) => {
                return (<NavComponent
                    key={reposBylanguage}
                    reposBylanguage={reposBylanguage}
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
function NavComponent({ reposBylanguage, selectedLang, update }) {

    return (
        <li>
            <button
                className="btn-clear nav-link"
                style={reposBylanguage === selectedLang ? { color: 'rgb(187, 46, 31)' } : null}
                onClick={() => update(reposBylanguage)}
            >
                {reposBylanguage}
            </button>
        </li>
    )
}

NavComponent.propTypes = {
    reposBylanguage: PropTypes.string.isRequired,
    selectedLang: PropTypes.string,
    update: PropTypes.func.isRequired
}