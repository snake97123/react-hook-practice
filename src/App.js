import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {
   // 状態変数の初期値は０
    const [count, setCount] = useState(0);

   // 副作用関数の宣言
   // countの値が変更された時に実行される
   const callbackFunction = () => {
     // titleの変更
     document.title = `You clicked ${count} times`;
   }

   useEffect(callbackFunction, [count]);

   const increment = () => {
      setCount(count + 1);
   }

   const countReset = () => {
      setCount(0);
   };

   return (
      <div className="App">
        <p>現在のカウント数：{count}</p>

        <button onClick={increment}>カウントアップ</button>
        <button onClick={countReset}>リセット</button>
      </div>
   );

 };

export default App;