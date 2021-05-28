import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

/**
 * a component for managing navigation for the app
 */
function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="flex-center">
            {languages.map((language) => {
                return (<li key={language}>
                    <button
                        className="btn-clear nav-link"
                        style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
                        onClick={() => onUpdateLanguage(language)}
                    >
                        {language}
                    </button>
                </li>)
            })}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

/**
 * a component for managing the popular repositories shown on the ui
 */
export default class Popular extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            error: null,
            repos: {}
        };

        this.updateSelectedLangugae = this.updateSelectedLangugae.bind(this)
    }

    /**
     * once the component is mounted update the ui with all repos
     */
    componentDidMount() {
        this.updateSelectedLangugae(this.state.selectedLanguage)
    }

    /**
     * get the selected language and update the ui
     */
    updateSelectedLangugae(selectedLanguage) {
        this.setState({
            selectedLanguage: selectedLanguage,
            error: null,
        })
        
        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data) => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                .catch((error) => {
                    this.setState({
                        error: `There was an error fetching the repositories ${error}`
                    })
                })
        }
    }

    /**
     * show loading if there are no repos or errors
     */
    isLoading() {
        const { selectedLanguage, error } = this.state
        return !selectedLanguage && error === null
    }

    render() {
        const { selectedLanguage, repos, error } = this.state
        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateSelectedLangugae}
                />

                {this.isLoading() && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
            </React.Fragment>
        )
    }
}