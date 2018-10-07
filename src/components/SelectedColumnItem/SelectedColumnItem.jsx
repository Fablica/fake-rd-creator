import React from "react";
import { Accordion, Table, Checkbox } from "semantic-ui-react";

const SelectedColumnItem = ({
  openedAccordionItem,
  table,
  createTableDetailed,
  ChangeSelectedColumn
}) => {
  return (
    <Accordion.Content active={openedAccordionItem === table ? true : false}>
      <Table color="red">
        {Object.keys(createTableDetailed[table].column).map((clm, index) => (
          <Table.Body key={index}>
            <Table.Row>
              <Table.Cell>
                <Checkbox slider checked={createTableDetailed[table].column[clm]} onChange={() => ChangeSelectedColumn(table, clm)} />
              </Table.Cell>
              <Table.Cell>{clm}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </Accordion.Content>
  );
};

export default SelectedColumnItem;
