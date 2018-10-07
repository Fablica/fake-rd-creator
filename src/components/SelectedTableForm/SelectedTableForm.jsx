import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

const SelectedTableForm = ({ createTableDetailed, ChangeSelectedTable }) => {
  return (
    <div>
      <Table color="red">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Selected</Table.HeaderCell>
            <Table.HeaderCell>Table</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(createTableDetailed).map((table, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Checkbox
                  slider
                  checked={createTableDetailed[table].createFlg}
                  onChange={() => ChangeSelectedTable(table)}
                />
              </Table.Cell>
              <Table.Cell>{table}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SelectedTableForm;
