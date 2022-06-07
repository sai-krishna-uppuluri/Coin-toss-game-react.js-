// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    image: HEADS_IMG_URL,
    headCount: 0,
    tailCount: 0,
  }

  onClickTossCoin = () => {
    const {headCount, tailCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (tossResult === 0) {
      latestHeadCount += 1
      tossImage = HEADS_IMG_URL
    } else {
      latestTailCount += 1
      tossImage = TAILS_IMG_URL
    }

    this.setState({
      image: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {image, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description"> Heads (or) Tails </p>
          <img className="image" src={image} alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-description">Total:{totalCount} </p>
            <p className="result-description"> Heads:{headCount} </p>
            <p className="result-description"> Tails:{tailCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
