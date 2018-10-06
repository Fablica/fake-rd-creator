import React from "react";
import { Accordion, Table, Checkbox, Icon } from "semantic-ui-react";

const SelectedColumnForm = ({openedAccordionItem, ChangeOpenAccordion}) => {
  return (
    <div>
      <Accordion fluid styled>
        <Accordion.Title active={openedAccordionItem === "TableA" ? true : false } index={0} onClick={() => ChangeOpenAccordion("TableA")}>
          <Icon name="dropdown" />
          TableA
        </Accordion.Title>
        <Accordion.Content active={openedAccordionItem === "TableA" ? true : false }>
          <Table color="red">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Checkbox slider onChange={() => console.log("hoge")} />
                </Table.Cell>
                <Table.Cell>clm1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Checkbox slider onChange={() => console.log("hoge")} />
                </Table.Cell>
                <Table.Cell>clm2</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>
        <Accordion.Title active={openedAccordionItem === "TableB" ? true : false } index={1} onClick={() => ChangeOpenAccordion("TableB")}>
          <Icon name="dropdown" />
          TableB
        </Accordion.Title>
        <Accordion.Content active={openedAccordionItem === "TableB" ? true : false }>
          <Table color="red">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Checkbox slider onChange={() => console.log("hoge")} />
                </Table.Cell>
                <Table.Cell>clm1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Checkbox slider onChange={() => console.log("hoge")} />
                </Table.Cell>
                <Table.Cell>clm2</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default SelectedColumnForm;
