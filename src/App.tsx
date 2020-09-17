import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LoremIpsum } from "lorem-ipsum";

import VirtualList from "./virtualList";

import "./App.css";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const getRandomOne = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

// https://www.youtube.com/watch?v=4hLuWbR4-eU

const App: React.FC<{}> = () => {
  const [feedData, setFeedData] = useState<{ title: string; id: number }[]>(
    Array.from(new Array(10000)).map((_, index) => ({
      title: lorem.generateSentences(1),
      content: lorem.generateParagraphs(1),
      imgUrl: getRandomOne([
        "https://i.picsum.photos/id/399/200/200.jpg?hmac=LCWCFY16G50iBPpqU6-FCw79ovEqvznYsxoQNCIldV8",
        "https://i.picsum.photos/id/477/200/200.jpg?hmac=pGA68LBET23UPGB7L8xL1pA7PYT_x7JazGX__CnlliU",
        "https://i.picsum.photos/id/696/200/200.jpg?hmac=JE4lFckorKxM41-eM1nTxXjpOeCf3aZkAxrLl3ZAYI0",
        "https://i.picsum.photos/id/1024/200/200.jpg?hmac=LR-PJPi70YREc_0NdDp68FkLt6-f1sKeJWwgOhCeyBU",
        "https://i.picsum.photos/id/791/200/200.jpg?hmac=bPVayqOX5aUzsnsX99AgWaxWB3WzWqwaiSDJ-lNHUk4",
        "https://i.picsum.photos/id/464/200/200.jpg?hmac=rT0rkzkukXVK3LYD1qHhc-Yqk0dFyIYoFk8wuNpCkAY",
        "https://i.picsum.photos/id/687/200/200.jpg?hmac=U-mrTuk3Y5M3brBJ76mYvaj-bZ3ggY1OD8YOIPw89uI",
      ]),
      id: index,
    }))
  );

  const [tableData, setTableData] = useState<
    {
      id: number;
      customer?: string;
      shop?: string;
      city?: string;
      goods?: string;
      quantity?: number;
      sales?: number;
    }[]
  >(
    [
      {
        id: -1,
      },
    ].concat(
      Array.from(new Array(50000)).map((_, index) => ({
        customer: getRandomOne(["张三", "李四", "王五", "Jack", "Marry"]),
        goods: getRandomOne(["洗衣机", "电冰箱", "电视机", "航空母舰", "电脑"]),
        shop: getRandomOne(["银泰", "天街", "大润发", "物美", "沃尔玛"]),
        id: index,
        quantity: Math.floor(Math.random() * 100) + 1,
        city: getRandomOne(["北京", "上海", "杭州", "成都", "深圳"]),
        sales: Math.floor(Math.random() * 1000) + 1,
      }))
    )
  );

  const [useAnimation, setUseAnimation] = useState(true);

  return (
    <div className="App">
      <h3>React virutal list demo</h3>
      <div className="setting">
        <div className="item">
          <input
            type="checkbox"
            id="animation"
            name="animation"
            checked={useAnimation}
            onChange={(e) => {
              setUseAnimation(e.target.checked);
            }}
          />
          <label htmlFor="scales">
            Turn {useAnimation ? "off" : "on"} animation
          </label>
        </div>
      </div>
      <div className="main">
        <div className="column">
          <h4>Feed(10000 records)</h4>
          <VirtualList
            className="dialog-list"
            height={600}
            itemSize={120}
            dataSource={feedData}
            overscanCount={0}
            renderCellWarpper={(items, style) => {
              return <TransitionGroup style={style}>{items}</TransitionGroup>;
            }}
            renderListItem={(item, index, style) => {
              return (
                <CSSTransition
                  key={item.id}
                  timeout={500}
                  classNames="item-vertical"
                >
                  <div className="list-item vertical" style={style}>
                    <div className="avatar">
                      <img src={item.imgUrl} alt="avatar" />
                    </div>
                    <div className="bubble">
                      <div className="title">
                        <div className="text">{item.title}</div>
                        <div
                          className="btn"
                          onClick={() => {
                            setFeedData(
                              feedData.filter((feed) => feed.id !== item.id)
                            );
                          }}
                        >
                          Delete
                        </div>
                      </div>
                      <div className="content">{item.content}</div>
                    </div>
                  </div>
                </CSSTransition>
              );
            }}
          />
        </div>
        <div className="column">
          <h4>Data Preview(50000 records)</h4>
          <VirtualList
            className="list table-list"
            height={400}
            itemSize={50}
            dataSource={tableData}
            renderCellWarpper={(items, style) => {
              return (
                <table style={style} className="table">
                  <thead className="table-header">
                    <tr>
                      <th>id</th>
                      <th>顾客名</th>
                      <th>商场</th>
                      <th>城市</th>
                      <th>商品</th>
                      <th>数量</th>
                      <th>销售额</th>
                    </tr>
                  </thead>
                  <tbody>{items}</tbody>
                </table>
              );
            }}
            renderListItem={(item, index, style) => {
              if (item.id === -1) {
                return (
                  <tr
                    key={item.id}
                    className="list-item horizontal"
                    style={style}
                  ></tr>
                );
              }
              return (
                <tr
                  key={item.id}
                  className="list-item horizontal"
                  style={style}
                >
                  <td>{item.id}</td>
                  <td>{item.customer}</td>
                  <td>{item.shop}</td>
                  <td>{item.city}</td>
                  <td>{item.goods}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sales}</td>
                </tr>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
