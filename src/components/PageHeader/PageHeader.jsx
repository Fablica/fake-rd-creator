import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

const PageHeader = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as={Link} to="/" header style={{ marginLeft: "0.5em" }}>
        TOP
      </Menu.Item>
      <Menu.Item as={Link} to="/home">
        Home
      </Menu.Item>
      <Menu.Item position="right">
        <a href="https://github.com/Kento75/fake-rd-creator">
          <Image
            size="mini"
            src="./assets/github.png"
            style={{ marginRight: "0.5em" }}
          />
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default PageHeader;
