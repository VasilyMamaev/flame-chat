import React from "react";

import checkedImg from "../../assets/img/tick.png";
import dCheckedImg from "../../assets/img/double-tick.png";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  isReaded: boolean;
  className?: string;
}

const ReadedIcon = (props: PropsType) => {
  return (
    <div>
      <img
        className={props.className}
        src={!props.isReaded ? checkedImg : dCheckedImg}
        alt="sended"
      />
    </div>
  );
};

export default ReadedIcon;
