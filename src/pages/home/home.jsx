import React from "react";

import "./home.scss";
import Message from "../../components/message/message.tsx";
import DialogItem from "../../components/dialog-item/dialog-item";

const Home = () => {
  return (
    <section className="home">
      <DialogItem
        user={{
          fullName: "Антон Чехов",
          isOnline: true,
          avatar:
            "https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200",
        }}
        message={{
          text:
            "Замечательный день сегодня. То ли чай пойти выпить, то ли повеситься",
          isReaded: true,
          created_at: new Date(),
        }}
        unreaded={99}
      />
      {/* <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text="test text"
        date={Date.now()}
        isIncome={false}
        isReaded={true}
        attachments={[
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
        ]}
        isTyping={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text="test texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest text"
        date={Date.now()}
        isIncome={true}
        isReaded={false}
        attachments={[
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
          {
            fileName: "",
            url: "https://source.unsplash.com/100x100/?random=1",
          },
        ]}
        isTyping={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text="test texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest text
        "
        date={Date.now()}
        isIncome={false}
        isReaded={false}
        isTyping={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text={null}
        date={Date.now()}
        isIncome={true}
        isTyping={true}
        isReaded={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text={null}
        date={Date.now()}
        isIncome={false}
        isTyping={true}
        isReaded={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text={null}
        date={Date.now()}
        attachments={[
          {
            fileName: "",
            url: "https://source.unsplash.com/200x200/?random=1",
          },
        ]}
        isIncome={true}
        isTyping={false}
        isReaded={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text={null}
        date={Date.now()}
        attachments={[
          {
            fileName: "",
            url: "https://source.unsplash.com/200x200/?random=1",
          },
        ]}
        isIncome={false}
        isTyping={false}
        isReaded={false}
      /> */}
    </section>
  );
};

export default Home;
