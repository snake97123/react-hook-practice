import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <p>現在のカウント数：{value}</p>
      {/* +1と-1とリセットボタンの設置 */}
      <button className="plus" onClick={() => setValue(value + 1)}>+1</button>
      <button className="minus" onClick={() => setValue(value - 1)}>-1</button>
      <button className="reset" onClick={() => setValue(0)}>リセット</button>
    </div>
  )
}

export default App;