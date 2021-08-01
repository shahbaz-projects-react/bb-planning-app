import { useContext } from "react";
import RowComponent from "../Components/RowComponent";
import { AppContext } from '../Components/ContextProvider'
import keysIn from "lodash/keysIn";
import { Table } from 'semantic-ui-react'

const BBPage = () => {
  const { store } = useContext(AppContext);
  const allKeys = keysIn(store);
  return (
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
      <Table.Footer></Table.Footer>
    </Table>

  )
};

export default BBPage;