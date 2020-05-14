import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import "./message.scss";
import checkedImg from "../../assets/img/tick.png";
import dCheckedImg from "../../assets/img/double-tick.png";

type PropsType = {
  avatar: string;
  text: string;
  date: Date;
  user: any;
  isIncome: boolean;
  isReaded: boolean;
  attachments: Array<any>;
};

const Message = (props: PropsType) => {
  return (
    <div
      className={classNames("message", { "message--outcome": !props.isIncome })}
    >
      {!props.isIncome && !props.isReaded ? (
        <img className="img-status" src={checkedImg} alt="sended" />
      ) : (
        !props.isIncome &&
        props.isReaded && (
          <img className="img-status" src={dCheckedImg} alt="readed" />
        )
      )}
      <div className="message__avatar">
        <img src={props.avatar} alt="{`${props.user.fullName} avatar`}" />
      </div>
      <div className="message__content">
        <p className="content__text">{props.text}</p>
        <div className="content__attachments">
          {props.attachments &&
            props.attachments.map((item) => (
              <div className="attachment">
                <img src={item.url} alt={item.fileName} />
              </div>
            ))}
        </div>
      </div>
      <time className="message__date">
        {formatDistanceToNow(props.date, { addSuffix: true, locale: ruLocale })}
      </time>
    </div>
  );
};

export default Message;
