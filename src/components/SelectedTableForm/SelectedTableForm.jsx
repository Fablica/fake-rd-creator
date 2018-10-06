import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

const SelectedTableForm = () => {
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
          <Table.Row>
            <Table.Cell>
              <Checkbox slider onChange={() => console.log("hoge")} />
            </Table.Cell>
            <Table.Cell>Table1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Checkbox slider onChange={() => console.log("hoge")} />
            </Table.Cell>
            <Table.Cell>Table2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default SelectedTableForm;
