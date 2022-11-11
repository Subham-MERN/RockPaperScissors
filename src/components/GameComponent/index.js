import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import ListItems from '../ListItems'

import {
  GameContainer,
  NavCard,
  GameName,
  GameScore,
  ParaText,
  ScoreText,
  UnorderedComponent,
  RuleButton,
  PopUpCard,
  RulesImage,
  CloseButton,
  RulesImageCard,
  ClosePopupCard,
  PlayersTextContainer,
  PlayersImage,
  PlayersLogoContainer,
  MatchStatusCard,
  PlayAgainButton,
} from './styledComponents'

class GameComponent extends Component {
  state = {
    score: 0,
    isGameOn: true,
    userId: '',
    opponent: '',
    result: '',
  }

  calculateScore = () => {
    const {userId, opponent} = this.state
    if (userId === opponent) {
      this.setState({result: 'IT IS DRAW'})
    } else if (userId === 'ROCK' && opponent === 'SCISSORS') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (userId === 'SCISSORS' && opponent === 'PAPER') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (userId === 'PAPER' && opponent === 'ROCK') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (userId === 'ROCK' && opponent === 'PAPER') {
      this.setState({result: 'YOU LOOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (userId === 'SCISSORS' && opponent === 'ROCK') {
      this.setState({result: 'YOU LOOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (userId === 'PAPER' && opponent === 'SCISSORS') {
      this.setState({result: 'YOU LOOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  calculateResult = id => {
    const {choicesList} = this.props
    this.setState({isGameOn: false, userId: id})
    const randomizeOption = choicesList[Math.floor(Math.random() * 3)].id
    this.setState({opponent: randomizeOption}, this.calculateScore)
  }

  renderTrump = item => {
    const {imageUrl} = item
    return <PlayersImage src={imageUrl} alt="abcd" />
  }

  reset = () => {
    this.setState({isGameOn: true})
  }

  renderScore = () => {
    const {userId, opponent, result} = this.state
    const {choicesList} = this.props

    return (
      <>
        <PlayersTextContainer>
          <ScoreText color="white">YOU</ScoreText>
          <ScoreText color="white">OPPONENT</ScoreText>
        </PlayersTextContainer>
        <PlayersLogoContainer>
          {this.renderTrump(choicesList.find(each => each.id === userId))}
          {this.renderTrump(choicesList.find(each => each.id === opponent))}
        </PlayersLogoContainer>
        <MatchStatusCard>
          <ParaText>{result}</ParaText>
          <PlayAgainButton type="button" onClick={this.reset}>
            PLAY AGAIN
          </PlayAgainButton>
        </MatchStatusCard>
      </>
    )
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <UnorderedComponent>
        {choicesList.map(each => (
          <ListItems
            key={each.id}
            choice={each}
            calculateResult={this.calculateResult}
          />
        ))}
      </UnorderedComponent>
    )
  }

  ReactPopUp = () => (
    <PopUpCard>
      <Popup modal trigger={<RuleButton type="button">RULES</RuleButton>}>
        {close => (
          <ClosePopupCard>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseButton>
            <RulesImageCard>
              <RulesImage
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </RulesImageCard>
          </ClosePopupCard>
        )}
      </Popup>
    </PopUpCard>
  )

  render() {
    const {score, isGameOn} = this.state

    return (
      <GameContainer>
        <NavCard>
          <GameName>
            <ParaText>Rock Paper Scissors</ParaText>
          </GameName>
          <GameScore>
            <ScoreText color="#223a5f">Score</ScoreText>
            <ScoreText color="#223a5f">{score}</ScoreText>
          </GameScore>
        </NavCard>
        {isGameOn ? this.renderGame() : this.renderScore()}
        {this.ReactPopUp()}
      </GameContainer>
    )
  }
}

export default GameComponent
