import styled from 'styled-components/macro'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`
export const NavCard = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: transparent;
  border-style: solid;
  border-color: white;
  justify-content: space-between;
  width: 60%;
  border-radius: 10px;
`
export const GameName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 14%;
  background-color: transparent;
  color: white;
`
export const GameScore = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border-style: none;
`
export const ParaText = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  padding: 0px;
  margin: 0px;
`
export const ScoreText = styled.p`
  color: ${props => props.color};

  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
`
export const UnorderedComponent = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;

  max-width: 40%;
  flex-wrap: wrap;
`

export const PopUpCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
`

export const RuleButton = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: white;
  align-self: flex-end;
  border-radius: 5px;
`
export const RulesImage = styled.img`
  width: 500px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
`
export const RulesImageCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const ClosePopupCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
`
export const PlayersTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 400px;
  margin-top: 80px;
`
export const PlayersLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 500px;
  margin-top: 10px;
`
export const PlayersImage = styled.img`
  width: 150px;
`
export const MatchStatusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 10px;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  font-family: 'Bree Serif';
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  color: #223a5f;
`
