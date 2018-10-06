import React, { Component } from "react";
import StepHeader from "../StepHeader/StepHeader";
import SelectedTableForm from "../SelectedTableForm/SelectedTableForm";

class HomePage extends Component {
  state = {
    createTableDetailed: [
      {
        TblA: {
          createFlg: false,
          column: {
            clmA: false,
            clmB: false,
          }
        }
      }
    ],
    showStepCategory: "step1"
  }

  handleChangeShowStepper = (selectedStep) => {
    this.setState({
      showStepCategory: selectedStep
    })
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <StepHeader showStepCategory={this.state.showStepCategory} ChangeShowStepper={this.handleChangeShowStepper} />
        { this.state.showStepCategory === "step1" && (
            <SelectedTableForm />
          )
        }
      </div>
    );
  }
};

export default HomePage;
