import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatAMango = () => {
    const {mango} = this.state
    this.setState(previousState => ({mango: previousState.mango + 1}))
  }

  eatABanana = () => {
    const {banana} = this.state
    this.setState(previousState => ({banana: previousState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-bg">
        <div className="sub-bg">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="bottom-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button type="submit" className="button" onClick={this.eatAMango}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango"
              />
              <button
                type="submit"
                className="button"
                onClick={this.eatABanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
