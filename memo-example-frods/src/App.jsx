import { useState } from "react";
import "./App.css";
import UpdateBox from "./components/UpdatedBox";
import NotUpdateBox from "./components/NotUpdatedBox";

function App() {
  const [item, setItem] = useState(false);

  return (
    <div>
      <div className="container">
        <button onClick={() => setItem((curr) => !curr)}>Click to blink</button>
        <UpdateBox item={item} setItem={setItem} />
        <NotUpdateBox />
      </div>
    </div>
  );
}

export default App;
