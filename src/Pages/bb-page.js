import { useContext, useCallback } from "react";
import RowComponent from "../components/RowComponent";
import { AppContext } from '../components/ContextProvider'
import keysIn from "lodash/keysIn";
import { Table } from 'semantic-ui-react'
import SaveButton from '../components/SaveButton'
import { setData } from "../utils/localStorage";

const BBPage = () => {
  const { store } = useContext(AppContext);
  const allKeys = keysIn(store);
  const saveData = (data) => {
    console.log('Saving...');
    setData(data);
  }
  const handleSave = useCallback(
    () => {
      saveData(store)
    },
    [store],
  )
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='1'>Day</Table.HeaderCell>
            <Table.HeaderCell colSpan='4'>Foods</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>Place</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allKeys && allKeys.map(key => <RowComponent key={key} day={key} />)}
        </Table.Body>
        <Table.Footer fullWidth>
        </Table.Footer>
      </Table>
      <SaveButton handleSave={handleSave} />
    </>
  )
};

export default BBPage;