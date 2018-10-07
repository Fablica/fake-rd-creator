import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import SelectedColumnItem from "../SelectedColumnItem/SelectedColumnItem";

const SelectedColumnForm = ({
  createTableDetailed,
  openedAccordionItem,
  ChangeOpenAccordion,
  ChangeSelectedColumn
}) => {
  return (
    <div>
      {Object.keys(createTableDetailed).map(
        (table, index) => {
          return createTableDetailed[table].createFlg
          ?
            <Accordion fluid styled key={index}>
              <Accordion.Title
                active={openedAccordionItem === table ? true : false}
                index={index}
                onClick={() => ChangeOpenAccordion(table)}
              >
                <Icon name="dropdown" />
                {table}
              </Accordion.Title>
              <SelectedColumnItem
                openedAccordionItem={openedAccordionItem}
                table={table}
                createTableDetailed={createTableDetailed}
                ChangeSelectedColumn={ChangeSelectedColumn}
              />
            </Accordion>
          : null
      })}
    </div>
  );
};

export default SelectedColumnForm;
