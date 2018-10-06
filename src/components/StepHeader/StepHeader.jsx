import React from 'react';
import { Step } from "semantic-ui-react";

const StepHeader = () => {
  return (
    <Step.Group ordered>
    <Step completed={false} onClick={() => console.log("sec1")}>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step completed={false} onClick={() => console.log("sec2")}>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step completed={false} onClick={() => console.log("sec3")}>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
    <Step completed={false} onClick={() => console.log("sec4")}>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
  )
}

export default StepHeader
