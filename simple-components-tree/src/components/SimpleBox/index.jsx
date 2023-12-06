import { Fragment, memo, useState } from "react";
import * as S from "../Box/Box.styles.js";

const SimpleBox = () => {
  const [blinkSelf, setBlinkSelf] = useState(false);
  const boxColor = "#9CC0EB";

  setTimeout(() => {
    console.log("Entrou o timeout");
    setBlinkSelf(false);
  }, 1000);

  return (
    <Fragment>
      <S.BoxContainer $blinkSelf={blinkSelf} $boxColor={boxColor}>
        Eu sou uma caixa simples (não recebo props)
      </S.BoxContainer>
    </Fragment>
  );
};

export default memo(SimpleBox);
