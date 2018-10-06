import React from "react";
import { Link } from "react-router-dom";

const TopPage = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted stackable header">
          <div className="content">fake-rd-creator</div>
        </h1>
        <br />
        <Link className="ui huge white inverted button" to="/home">
          Get Started
          <i className="right arrow icon" />
        </Link>
      </div>
    </div>
  );
};

export default TopPage;
