import React from 'react'

export default class Popular extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        };

        this.updateSelectedLangugae = this.updateSelectedLangugae.bind(this)
    }

    updateSelectedLangugae(selectedLanguage) {
        this.setState({
            selectedLanguage: selectedLanguage
        })
    }
    
    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return(
            <ul className="flex-center">
                {languages.map((language) => {
                    return (<li key={language}>
                        <button
                            className="btn-clear nav-link"
                            style={language === this.state.selectedLanguage ? { color: 'rgb(187, 46, 31)' } : null}
                            onClick ={() => this.updateSelectedLangugae(language)}
                        >
                        { language}
                        </button>
                    </li>)
                })}
            </ul>
        )
    }
}