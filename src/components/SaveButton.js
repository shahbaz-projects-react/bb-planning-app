import { useContext } from "react"
import {AppContext} from './ContextProvider'
import { Button, Icon } from 'semantic-ui-react'

const SaveButton = ({foods,place,day}) => {
    const {updateStore} = useContext(AppContext);

    const handleSave = () => {
       updateStore(foods,place,day)
    }
    return <Button animated='vertical' onClick={handleSave}>
    <Button.Content hidden>Update</Button.Content>
    <Button.Content visible>
      <Icon name='add' />
    </Button.Content>
  </Button>
}

export default SaveButton