import { useEffect, useRef, memo } from "react";

const NotUpdateBox = ({ setIsMemoized, isMemoized }) => {
  let box = useRef("");

  useEffect(() => {
    box.current.style.backgroundColor = "#FFAFCC";
  });

  setTimeout(() => {
    box.current.style.backgroundColor = "#A2D2FF";
  }, 750);

  return (
    <div
      ref={box}
      id="box"
      className="not-update-box"
      onClick={() => setIsMemoized((curr) => !curr)}
    >
      <div>
        <p>Click to toggle memo()</p>
        <p className="boolean-marker">{isMemoized.toString().toUpperCase()}</p>
      </div>
    </div>
  );
};

const MemoizedNotUpdateBox = memo(({ setIsMemoized, isMemoized }) => {
  let box = useRef("");

  useEffect(() => {
    box.current.style.backgroundColor = "#FFAFCC";
  });

  setTimeout(() => {
    box.current.style.backgroundColor = "#A2D2FF";
  }, 750);

  return (
    <div
      ref={box}
      id="box"
      className="not-update-box"
      onClick={() => setIsMemoized((curr) => !curr)}
    >
      <div>
        <p>Click to toggle memo()</p>
        <p className="boolean-marker">{isMemoized.toString().toUpperCase()}</p>
      </div>
    </div>
  );
});

NotUpdateBox.displayName = "NotUpdateBox";

export { NotUpdateBox, MemoizedNotUpdateBox };
