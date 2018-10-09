import React from "react";
import { Modal } from "semantic-ui-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

const SocialModal = ({ showSocialDialog, OnClickSocialButton }) => {
  const shareUrl = "https://kento75.github.io/fake-rd-creator/";
  const title = "fake-rd-creator";
  return (
    <Modal
      size="mini"
      open={showSocialDialog}
      closeIcon
      centered={false}
      onClick={() => OnClickSocialButton()}
    >
      <Modal.Header>Share Buttons</Modal.Header>
      <Modal.Content style={{ display: "flex", justifyContent: "center" }}>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          style={{ paddingRight: "30px" }}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          style={{ paddingLeft: "30px" }}
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </Modal.Content>
    </Modal>
  );
};

export default SocialModal;
