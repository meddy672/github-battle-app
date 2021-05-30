import React from 'react'
import PropTypes from 'prop-types'

/**
 * main nav for the application
 */
export default function MainNavigation({ selected, update }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((language) => {
                return (<NavComponent
                    key={language}
                    language={language}
                    selected={selected}
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
function NavComponent({ language, selected, update }) {

    return (
        <li>
            <button
                className="btn-clear nav-link"
                style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
                onClick={() => update(language)}
            >
                {language}
            </button>
        </li>
    )
}

NavComponent.propTypes = {
    language: PropTypes.string.isRequired,
    selected: PropTypes.string,
    update: PropTypes.func.isRequired
}