import { useState } from "react";
import "./reset.css";
import "./App.css";
import UpdateBox from "./components/UpdatedBox";
import NotUpdateBox from "./components/NotUpdatedBox";

function App() {
  const [state, setState] = useState(false);

  return (
    <div>
      <div className="container">
        <button className="update-button" onClick={() => setState((curr) => !curr)}>
          Click here to update state
        </button>

        <div className="vertical-line"></div>

        <UpdateBox state={state} />
        <div className="vertical-line"></div>
        <NotUpdateBox />
      </div>
    </div>
  );
}

export default App;
