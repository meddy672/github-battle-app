import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import PopularRepositiories from './components/Popular'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <PopularRepositiories />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)