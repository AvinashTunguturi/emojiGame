import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle 
  the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameFinished: false,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameFinished: false})
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameFinished: true})
  }

  onSelectingEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {clickedEmojisList, topScore, isGameFinished} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList.length === emojisList.length

    const reRenderedEmojiList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="app-container">
        <NavBar
          score={clickedEmojisList.length}
          topScore={topScore}
          isGameFinished={isGameFinished}
        />
        <div className="emoji-game-container">
          {!isGameFinished ? (
            <ul className="emojis-container">
              {reRenderedEmojiList.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emojiDetails={emoji}
                  onSelectingEmoji={this.onSelectingEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              onClickPlayAgain={this.resetGame}
              score={clickedEmojisList.length}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
