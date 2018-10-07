import React, { Component } from "react";

import StepHeader from "../StepHeader/StepHeader";
import SelectedTableForm from "../SelectedTableForm/SelectedTableForm";
import SelectedColumnForm from "../SelectedColumnForm/SelectedColumnForm";
import SelectedFileTypeForm from "../SelectedFileTypeForm/SelectedFileTypeForm";

class HomePage extends Component {
  state = {
    createTableDetailed: {
      // ユーザ一覧
      users: {
        createFlg: false,
        lineLength: 1,
        column: {
          userId: false, // random.uuid
          fullName: false, // name.firstName
          firstName: false, // name.lastName
          lastName: false, // firstName + " " + lastName
          loginId: false, // internet.userName
          password: false, // internet.password
          avatarURL: false, // internet.avatar
          email: false, // internet.email
          phoneNumber: false, // phone.phoneNumberFormat
          streetAddress: false, // address.streetAddress
          companyName: false // company.compayName
        }
      },
      // 投稿
      posts: {
        createFlg: false,
        lineLength: 1,
        column: {
          userId: false, // random.uuid(usersの)
          postId: false, // random.uuid
          sentence: false, // lorem.sentence
          slug: false, // lorem.slug
          paragraph: false, // lorem.paragraph
          text: false // lorem.text
        }
      }
    },
    showStepCategory: "step1",
    openedAccordionItem: "",
    outputFileTypes: []
  };

  handleChangeShowStepper = selectedStep => {
    this.setState({
      showStepCategory: selectedStep
    });
  };

  handleChangeOpenAccordion = openItem => {
    if (this.state.openedAccordionItem === openItem) {
      this.setState({
        openedAccordionItem: ""
      });
    } else {
      this.setState({
        openedAccordionItem: openItem
      });
    }
  };

  handleChangeSelectedTable = selectedTable => {
    let changedCreateTableDetailed = this.state.createTableDetailed;
    if(this.state.createTableDetailed[selectedTable].createFlg !== false) {
      changedCreateTableDetailed[selectedTable].createFlg = false;
    } else {
      changedCreateTableDetailed[selectedTable].createFlg = true;
    }
    this.setState({
      createTableDetailed: changedCreateTableDetailed
    });
  };

  handleChangeSelectedColumn = (selectedTable, selectedColumn) => {
    let changedCreateTableDetailed = this.state.createTableDetailed;
    if(this.state.createTableDetailed[selectedTable].column[selectedColumn] !== false) {
      changedCreateTableDetailed[selectedTable].column[selectedColumn] = false;
    } else {
      changedCreateTableDetailed[selectedTable].column[selectedColumn] = true;
    }
    this.setState({
      createTableDetailed: changedCreateTableDetailed
    });
  };

  handleChangeSelectedFileType = selectedFileType => {
    if (this.state.outputFileTypes.indexOf(selectedFileType) >= 0) {
      let filteredFileTypes = this.state.outputFileTypes.filter(fileType => {
        return fileType !== selectedFileType;
      });

      this.setState({
        outputFileTypes: filteredFileTypes
      });
    } else {
      let addingFileType = this.state.outputFileTypes;
      addingFileType.push(selectedFileType);
      this.setState({
        outputFileTypes: addingFileType
      });
    }
  };

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <StepHeader
          showStepCategory={this.state.showStepCategory}
          ChangeShowStepper={this.handleChangeShowStepper}
        />
        {this.state.showStepCategory === "step1" ? (
          <SelectedTableForm createTableDetailed={this.state.createTableDetailed} ChangeSelectedTable={this.handleChangeSelectedTable} />
        ) : this.state.showStepCategory === "step2" ? (
          <SelectedColumnForm
            createTableDetailed={this.state.createTableDetailed}
            openedAccordionItem={this.state.openedAccordionItem}
            ChangeOpenAccordion={this.handleChangeOpenAccordion}
            ChangeSelectedColumn={this.handleChangeSelectedColumn}
          />
        ) : (
          <SelectedFileTypeForm
            outputFileTypes={this.state.outputFileTypes}
            ChangeSelectedFileType={this.handleChangeSelectedFileType}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
