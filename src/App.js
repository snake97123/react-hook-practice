import React, { useState, useEffect } from "react";

const Timer = ({ startTimer }) => {
  const [count, setCount] = useState(0);

  const countReset = () => {
    setCount(0);
  };

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("カウントアップ＋１");
  };

  useEffect(() => {
    let timerId;
    if (startTimer) {
      alert("副作用が実行されました");
      timerId = setInterval(countIncrement, 1000);
      console.log(timerId);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
        console.log("timerが削除されました。");
      }
    };
  }, [startTimer]);

  return (
    <div className="App">
      <p>現在のカウント数：{count}</p>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

function App() {
  const [display, toggleDisplay] = useState(false);

  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };

  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "タイマーを非表示" : "タイマーを表示"}
      </button>
      {display && <Timer startTimer={display} />}
    </>
  );
}

export default App;
