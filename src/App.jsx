import { useState, memo, useEffect } from "react";
import "./reset.css";
import "./App.css";
import UpdateBox from "./components/UpdatedBox";
import { NotUpdateBox, MemoizedNotUpdateBox } from "./components/NotUpdatedBox";

function App() {
  const [state, setState] = useState(false);
  const [isMemoized, setIsMemoized] = useState(false);

  useEffect(() => {
    console.log("isMemoized:");
    console.log(isMemoized);
  }, [isMemoized]);

  return (
    <div>
      <div className="container">
        <button
          className="update-button"
          onClick={() => setState((curr) => !curr)}
        >
          Click here to update state
        </button>
        <div className="vertical-line"></div>
        <UpdateBox state={state} />
        <div className="vertical-line" />

        {isMemoized === true ? (
          <NotUpdateBox isMemoized={isMemoized} setIsMemoized={setIsMemoized} />
        ) : (
          <MemoizedNotUpdateBox
            isMemoized={isMemoized}
            setIsMemoized={setIsMemoized}
          />
        )}
      </div>
    </div>
  );
}

export default App;
