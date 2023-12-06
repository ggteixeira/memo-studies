import { useEffect, useState } from "react";
import * as S from "./Box.styles";

function Box({ boxColor, children, forceBlink, setForceBlink }) {
  const [blinkSelf, setBlinkSelf] = useState(true);

  setTimeout(() => {
    console.log("Entrou o timeout");
    setBlinkSelf(false);
  }, 1000);

  useEffect(() => {
    if (forceBlink && setForceBlink) setForceBlink(false);
  }, [forceBlink, setForceBlink]);

  return (
    <>
      <S.BoxContainer
        $forceBlink={forceBlink}
        $blinkSelf={blinkSelf}
        $boxColor={boxColor}
      >
        {children && children}
      </S.BoxContainer>
    </>
  );
}

export default Box;
