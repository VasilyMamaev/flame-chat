import React from "react";
import classNames from "classnames";

import "./base-block.scss";

const BaseBlock = ({ children, className }) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default BaseBlock;
