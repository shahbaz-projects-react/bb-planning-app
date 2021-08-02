import { Button, Icon } from 'semantic-ui-react'

const SaveButton = ({ handleSave }) => {
  return <Button onClick={handleSave}>
    <Button.Content hidden>Save Changes</Button.Content>
    <Button.Content visible>
      <Icon name='save' />
    </Button.Content>
  </Button>
}

export default SaveButton