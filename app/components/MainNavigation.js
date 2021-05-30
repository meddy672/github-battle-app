import React from 'react'
import PropTypes from 'prop-types'

/**
 * show main nav
 */
export default function MainNavigation({ selected, update }) {

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((language) => {
                return (<NavComponent
                    key={language}
                    language={language}
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
function NavComponent({ language, selectedLang, update }) {

    return (
        <li>
            <button
                className="btn-clear nav-link"
                style={language === selectedLang ? { color: 'rgb(187, 46, 31)' } : null}
                onClick={() => update(language)}
            >
                {language}
            </button>
        </li>
    )
}

NavComponent.propTypes = {
    language: PropTypes.string.isRequired,
    selectedLang: PropTypes.string,
    update: PropTypes.func.isRequired
}