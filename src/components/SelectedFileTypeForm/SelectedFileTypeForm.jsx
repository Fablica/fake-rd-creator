import React from "react";
import { Dropdown, Menu, Table, Checkbox, Button } from "semantic-ui-react";

const SelectedFileTypeForm = ({outputFileTypes, lineLength, ChangeSelectedFileType, ClickGenerateButton}) => {
  return (
    <div>
      <Table color="red">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Selected</Table.HeaderCell>
            <Table.HeaderCell>File Type</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Checkbox slider checked={outputFileTypes.indexOf("CSV") >= 0 ? true : false} onChange={() => ChangeSelectedFileType("CSV")} />
            </Table.Cell>
            <Table.Cell>CSV</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Checkbox slider checked={outputFileTypes.indexOf("JSON") >= 0 ? true : false} onChange={() => ChangeSelectedFileType("JSON")} />
            </Table.Cell>
            <Table.Cell>JSON</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <br/>
      {/* <Menu compact>
        <Dropdown text='To create 1 lines' options={options} simple item />
      </Menu> */}
      <Button disabled={!outputFileTypes.length >= 1} color='red' onClick={() => ClickGenerateButton()}>GENERATE</Button>
    </div>
  );
};

export default SelectedFileTypeForm;
