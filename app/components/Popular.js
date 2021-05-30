import React from 'react'
import { fetchPopularRepos } from '../api/Repositories'

import MainNavigation from './MainNavigation'
import GridLayout from './GridLayout'


/**
 * main component for showing popular repositories
 */
export default class PopularRepositiories extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            error: null,
            repositories: {}
        };

        this.onUpdateListener = this.onUpdateRepositories.bind(this)
    }

    /**
     * update the ui with all repos
     */
    componentDidMount() {
        this.onUpdateRepositories(this.state.selectedLanguage)
    }

    /**
     * get repositories by selected language
     */
     onUpdateRepositories(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
        })
        
         if (!this.state.repositories[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((reposByLanguage) => {
                    this.setState({
                        repositories: {
                            ...reposByLanguage,
                            [selectedLanguage]: reposByLanguage,
                        }
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: `There was an error fetching the repositories ${error}`
                })
            })
        }
    }

    /**
     * loader
     */
    isLoading() {
        const { selectedLanguage, repositories, error } = this.state        
        return !repositories[selectedLanguage] && error === null
    }
    
    render() {
        const { selectedLanguage, repositories, error } = this.state
        return (
            <main>
                <MainNavigation
                    selectedLang={selectedLanguage}
                    updateListener={this.onUpdateListener}
                />
                {this.isLoading() && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repositories[selectedLanguage] && <GridLayout reposByLanguage={repositories[selectedLanguage]} />}
            </main>
        )
    }
}