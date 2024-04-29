import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onClickEmoji = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {isClicked === true ? (
          <div className="feedback-card">
            <h1 className="heading">
              How satisfied are you with our <br />
              customer support performance?
            </h1>
            <ul className="emoji-card">
              {emojis.map(eachEmoji => (
                <li className="each-emoji" key={eachEmoji.id}>
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji-icon"
                    onClick={this.onClickEmoji}
                  />
                  <p className="emoji-name">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul>
            <li className="thankyou-card" key={loveEmojiUrl}>
              <img src={loveEmojiUrl} alt="love emoji" className="love-icon" />
              <h1 className="thankyou-heading">Thank You!</h1>
              <p className="love-name">
                We will see your feedback to improve our customer support
                performance.
              </p>
            </li>
          </ul>
        )}
      </div>
    )
  }
}
export default Feedback
