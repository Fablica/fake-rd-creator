import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted stackable header">
          <div className="content">404 Not Found</div>
        </h1>
        <br />
        <Link className="ui huge white inverted button" to="/fake-rd-creator">
          Top Page
          <i className="right arrow icon" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
