import {ChoiceListItem, ImageCard, ChoiceButton} from './styledComponents'

const ListItem = props => {
  const {choice, calculateResult} = props
  const {imageUrl, id} = choice

  const renderResult = () => {
    calculateResult(id)
  }

  return (
    <ChoiceListItem>
      <ChoiceButton
        type="button"
        onClick={renderResult}
        data-testid={`${id.toLowerCase}Button`}
      >
        <ImageCard src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceListItem>
  )
}
export default ListItem
