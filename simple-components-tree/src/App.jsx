import { Fragment, useEffect, useState } from "react";
import "./App.css";
import * as S from "./App.styles";

import Box from "./components/Box";
import SimpleBox from "./components/SimpleBox";

function App() {
  const [parentColor, setParentColor] = useState("#E9E9ED");
  const [childColor, setChildColor] = useState("#E9E9ED");
  const [forceBlink, setForceBlink] = useState(false);

  const options = [
    { name: "#9CC0EB", label: "Azul bebê" },
    { name: "#EEB3C6", label: "Rosa bebê" },
    { name: "firebrick", label: "Tijolinho" },
    { name: "orange", label: "Lalanja" },
    { name: "lightgreen", label: "Suquinho de Limão" },
  ];

  const handleSelect = (event) => {
    setParentColor(event.target.value);
    setForceBlink(true);
  };

  return (
    <Fragment>
      <div>
        <h1>Boxes</h1>
      </div>
      <S.SelectBox>
        <select value={parentColor} onChange={handleSelect} id="parent-select">
          <option>Please choose a color</option>
          {options.map((option, index) => {
            return (
              <option value={option.name} key={index}>
                {option.label}
              </option>
            );
          })}
        </select>
      </S.SelectBox>
      <Box
        key={forceBlink}
        forceBlink={forceBlink}
        setForceBlink={setForceBlink}
        boxColor={parentColor}
      >
        <p>Eu sou uma caixa de cor {parentColor} </p>

        <div>
          <Box forceBlink={forceBlink} boxColor="#EEB3C6">
            Eu sou uma caixa que <strong>recebe</strong> props
          </Box>
          <SimpleBox />
        </div>
      </Box>
    </Fragment>
  );
}

export default App;
