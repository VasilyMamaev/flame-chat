import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";
import Message from "../../components/message/message.tsx";

const Home = () => {
  return (
    <section className="home">
      <Message
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
      />
      <Message
        avatar="https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d6d517678125e00ad650e3a_5d6d51cd4735a600adbdd9c2/scale_1200"
        text="test texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest texttest text
        "
        date={Date.now()}
        isIncome={false}
        isReaded={false}
      />
    </section>
  );
};

export default Home;
