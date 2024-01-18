import { useEffect, useRef, memo } from "react";

const NotUpdateBox = () => {
  let box = useRef("");

  useEffect(() => {
    console.log("NotUpdateBox: atualizou");
    box.current.style.backgroundColor = "#FFAFCC";
  });

  setTimeout(() => {
    box.current.style.backgroundColor = "#A2D2FF";
  }, 750);

  return (
    <div ref={box} id="box" className="not-update-box">
      <div>
        <p>I'm not updating, unless you use memo()</p>
      </div>
    </div>
  );
};

NotUpdateBox.displayName = "NotUpdateBox";

// export default NotUpdateBox;
export default memo(NotUpdateBox);
