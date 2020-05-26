import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import "./message.scss";
import ReadedIcon from "../readed-icon/readed-icon";

type PropsType = {
  avatar: string;
  text: string;
  date: Date;
  user: any;
  isIncome: boolean;
  isReaded: boolean;
  attachments: Array<any>;
  isTyping: boolean;
};

const Message = (props: PropsType) => {
  return (
    <div
      className={classNames("message", {
        "message--outcome": !props.isIncome,
        "message--is-typing": props.isTyping,
        "message--image": props.attachments && props.attachments.length === 1,
      })}
    >
      {!props.isIncome && <ReadedIcon isReaded={props.isReaded} />}
      <div className="message__avatar">
        {/* FIXME: прокинуть пропс */}
        <img src={props.avatar} alt="{`${props.user.fullName} avatar`}" />
      </div>
      <div className="message__content">
        <p className="content__text">{!props.isTyping && props.text}</p>
        {props.attachments && (
          <div className="content__attachments">
            {props.attachments.map((item) => (
              <div className="attachment">
                <img src={item.url} alt={item.fileName} />
              </div>
            ))}
          </div>
        )}
        {props.isTyping && (
          <div className="content__typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      <time className="message__date">
        {props.isTyping
          ? "печатает..."
          : formatDistanceToNow(props.date, {
              addSuffix: true,
              locale: ruLocale,
            })}
      </time>
    </div>
  );
};

export default Message;
