import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {count: false}

  changeButton = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  render() {
    const {count} = this.state
    const buttonText = count ? 'Welcome User' : 'Please Login'
    const paragraphText = count ? 'Logout' : 'Login'

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">{buttonText}</h1>
          <button
            className="login-button"
            type="button"
            onClick={this.changeButton}
          >
            {paragraphText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
