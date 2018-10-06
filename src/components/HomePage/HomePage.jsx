import React, { Component } from "react";

import StepHeader from "../StepHeader/StepHeader";
import SelectedTableForm from "../SelectedTableForm/SelectedTableForm";
import SelectedColumnForm from "../SelectedColumnForm/SelectedColumnForm";
import SelectedFileTypeForm from "../SelectedFileTypeForm/SelectedFileTypeForm";

class HomePage extends Component {
  state = {
    createTableDetailed: [
      {
        TblA: {
          createFlg: false,
          lineLength: 1,
          column: {
            clmA: false,
            clmB: false,
          }
        }
      }
    ],
    showStepCategory: "step1",
    openedAccordionItem : "",
    outputFileTypes: []
  }

  handleChangeShowStepper = (selectedStep) => {
    this.setState({
      showStepCategory: selectedStep
    })
  }

  handleChangeOpenAccordion = (openItem) => {
    if(this.state.openedAccordionItem === openItem) {
      this.setState({
        openedAccordionItem: ""
      })
    } else {
      this.setState({
        openedAccordionItem: openItem
      })
    }
  }

  handleChangeSelectedFileType = (selectedFileType) => {
    if(this.state.outputFileTypes.indexOf(selectedFileType) >= 0) {
      let filteredFileTypes = this.state.outputFileTypes.filter((fileType) => {
        return fileType !== selectedFileType;
      })
      
      this.setState({
        outputFileTypes: filteredFileTypes
      })
    } else {
      let addingFileType =  this.state.outputFileTypes;
      addingFileType.push(selectedFileType)
      this.setState({
        outputFileTypes: addingFileType
      })
    }
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <StepHeader showStepCategory={this.state.showStepCategory} ChangeShowStepper={this.handleChangeShowStepper} />
        { this.state.showStepCategory === "step1" ? (<SelectedTableForm />)
          : this.state.showStepCategory === "step2"
            ? (<SelectedColumnForm
                openedAccordionItem={this.state.openedAccordionItem}
                ChangeOpenAccordion={ this.handleChangeOpenAccordion } />
              )
            : (<SelectedFileTypeForm outputFileTypes={this.state.outputFileTypes} ChangeSelectedFileType={this.handleChangeSelectedFileType} />)
        }

      </div>
    );
  }
};

export default HomePage;
