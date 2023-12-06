import { useEffect, useRef, memo } from "react";

const NotUpdateBox = () => {
  let box = useRef("");
  let boxColor = box.current?.style?.backgroundColor;

  useEffect(() => {
    console.log("NotUpdateBox: atualizou");
    box.current.style.backgroundColor = "firebrick";
  });

  setTimeout(() => {
    box.current.style.backgroundColor = "gray";
  }, 250);

  return (
    <div
      ref={box}
      id="box"
      style={{
        transition: "0.5s",
        backgroundColor:
          boxColor && boxColor === "firebrick" ? "firebrick" : "gray",
      }}
      className="not-update-box"
    >
      Non Updating Box
    </div>
  );
};

NotUpdateBox.displayName = "NotUpdateBox";
export default NotUpdateBox;
// export default memo(NotUpdateBox);
