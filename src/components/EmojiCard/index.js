// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectingEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    onSelectingEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
