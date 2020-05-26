import React from "react";
import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

import "./dialog-item.scss";
import ReadedIcon from "../readed-icon/readed-icon";
import { UserType, MessageType } from "../../types/types";

type PropsType = {
  user: UserType;
  message?: MessageType;
  unreaded: number;
};

const getAvatar = (avatar: undefined | string) => {
  if (avatar) {
    return avatar;
  } else {
    //TODO: make avatar
  }
};

const DialogItem = (props: PropsType) => {
  return (
    <div className="dialogs__item">
      <div
        className={classNames("item__avatar", {
          "--online": props.user.isOnline,
        })}
      >
        <img
          src={getAvatar(props.user.avatar)}
          alt={`${props.user.fullName}`}
        />
      </div>
      <div className="item__info">
        <div className="info__top">
          <b>{props.user.fullName}</b>
          {props.message && (
            <time>
              {formatDistanceToNow(props.message.created_at, {
                addSuffix: true,
                locale: ruLocale,
              })}
            </time>
          )}
        </div>
        <div className="info__botttom">
          {props.message ? (
            <>
              <p>{props.message.text}</p>
              {!props.unreaded ? (
                <ReadedIcon
                  className="botttom__thick-icon"
                  isReaded={props.message.isReaded}
                />
              ) : (
                <span className="botttom__unreaded-buble">
                  {props.unreaded > 99 ? "+99" : props.unreaded}
                </span>
              )}
            </>
          ) : (
            <p>нет сообщений</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
