import React from 'react'

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
        const { selectedLanguage } = this.state
        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateSelectedLangugae}
                />
            </React.Fragment>
        )
    }
}