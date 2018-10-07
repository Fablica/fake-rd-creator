import React, { Component } from "react";

import StepHeader from "../StepHeader/StepHeader";
import SelectedTableForm from "../SelectedTableForm/SelectedTableForm";
import SelectedColumnForm from "../SelectedColumnForm/SelectedColumnForm";
import SelectedFileTypeForm from "../SelectedFileTypeForm/SelectedFileTypeForm";
import { generateData } from "../../helpers/generateData";

class HomePage extends Component {
  state = {
    createTableDetailed: {
      // ユーザ一覧
      users: {
        createFlg: false,
        column: {
          userId: false, // random.uuid
          fullName: false, // name.firstName + " " + name.lastName
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
    outputFileTypes: [],
    lineLength: 1,
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

  handleOnClickGenerateButton = () => {
    let tableList = generateData(this.state.lineLength, this.state.createTableDetailed)
    let fileLink = document.createElement("a");
    if(this.state.outputFileTypes.indexOf("JSON") >= 0) {
      for(let i in tableList) {
        fileLink.href = "data:text/json;charset=utf-8;base64," + window.btoa(unescape(encodeURIComponent(JSON.stringify(tableList[i]))));
        fileLink.target = "_blank";
        fileLink.download = `${i}.json`;
        document.body.appendChild(fileLink);
        fileLink.click();
        fileLink.parentNode.removeChild(fileLink);
      }
    }
    if(this.state.outputFileTypes.indexOf("CSV") >= 0) {
      let header = null;
      let body = null;
      for(let i in tableList) {
        header = Object.keys(tableList[i][0]).join(',') + "\n";
        body = tableList[i].map(function(d) {
          return Object.keys(d).map(function(key) {
              return d[key];
          }).join(',');
        }).join("\n");
        
        fileLink.href = "data:text/csv;charset=utf-8;base64," + window.btoa(unescape(encodeURIComponent(header + body)));
        fileLink.target = "_blank";
        fileLink.download = `${i}.csv`;
        document.body.appendChild(fileLink);
        fileLink.click();
        fileLink.parentNode.removeChild(fileLink);
      }
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
            lineLength={this.state.lineLength}
            ChangeSelectedFileType={this.handleChangeSelectedFileType}
            ClickGenerateButton={this.handleOnClickGenerateButton}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
