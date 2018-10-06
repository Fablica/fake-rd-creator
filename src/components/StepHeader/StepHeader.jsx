import React from 'react';
import { Step } from "semantic-ui-react";

const StepHeader = ({ showStepCategory, ChangeShowStepper }) => {
  return (
    <Step.Group ordered>
    <Step active={ showStepCategory === "step1" ? true : false} onClick={() => ChangeShowStepper("step1")}>
      <Step.Content>
        <Step.Title>Step1</Step.Title>
        <Step.Description>Select Table</Step.Description>
      </Step.Content>
    </Step>
    <Step active={ showStepCategory === "step2" ? true : false} onClick={() => ChangeShowStepper("step2")}>
      <Step.Content>
        <Step.Title>Step2</Step.Title>
        <Step.Description>Select Column</Step.Description>
      </Step.Content>
    </Step>
    <Step active={ showStepCategory === "step3" ? true : false} onClick={() => ChangeShowStepper("step3")}>
      <Step.Content>
        <Step.Title>Step3</Step.Title>
        <Step.Description>Select File Type</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
  )
}

export default StepHeader
