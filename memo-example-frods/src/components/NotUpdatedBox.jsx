import { useEffect, useRef, memo } from "react";

const NotUpdateBox = () => {
  let box = useRef("");
  let boxColor = box.current?.style?.backgroundColor;

  useEffect(() => {
    console.log("NotUpdateBox: atualizou");
    box.current.style.backgroundColor = "#FFAFCC";
  });

  setTimeout(() => {
    box.current.style.backgroundColor = "#A2D2FF";
  }, 250);

  return (
    <div
      ref={box}
      id="box"
      style={{
        width: "15rem",
        height: "15rem",
        transition: "1s",
        backgroundColor:
          boxColor && boxColor === "#FFAFCC" ? "firebrick" : "#A2D2FF",
      }}
      className="not-update-box"
    >
      Box that does not update
    </div>
  );
};

NotUpdateBox.displayName = "NotUpdateBox";

// export default NotUpdateBox;
export default memo(NotUpdateBox);
