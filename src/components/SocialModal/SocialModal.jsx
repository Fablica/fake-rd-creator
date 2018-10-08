import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";

const SocialModal = ({ showSocialDialog, OnClickSocialButton }) => {
  return (
    <Modal open={showSocialDialog}>
      <Modal.Header>Social Links</Modal.Header>
      <Modal.Content>
        <Button color="twitter" onClick={() => OnClickSocialButton()}>
          <Icon name="twitter" /> Twitter
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default SocialModal;
