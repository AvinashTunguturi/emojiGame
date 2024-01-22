// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameFinished} = props

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="game-label">Emoji Game</h1>
        </div>

        {!isGameFinished && (
          <div className="scores-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
