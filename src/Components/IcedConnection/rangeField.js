import React from 'react';
import Slider from 'react-input-slider';
import {useState} from "react"
import "./icedConnection.css";
function App() {
  const [state, setState] = useState({ x: 1 });

  return (
    <div className="range-main-div">
      <span>{state.x}</span>
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
        styles={{
            track: {
              backgroundColor: '#FEFEFE',
              marginTop:"15px"
            },
            active: {
              backgroundColor: '#5D62F9'
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor:"#5D62F9"
            },
            disabled: {
              opacity: 0.5
            }
          }}
      />
    </div>
  );
}
export default App;