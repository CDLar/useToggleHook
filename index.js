//Toggle state variant

import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
}
export default useToggle;

<!------------------------------------------------------------------------>
//Toggle state with unique true/false functions
  
import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggleOpen = useCallback(() => setState(state => true), []);
  const toggleClose = useCallback(() => setState(state => false), []);

  return [state, toggleOpen, toggleClose];
}
export default useToggle;

<!------------------------------------------------------------------------>
//UseHover Hook
import React from 'react';
import ReactDOM from 'react-dom';
import useHover from './use-hover';

function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        color: 'white',
        padding: '8rem',
        width: '12rem',
        textAlign: 'center',
        fontSize: '5rem',
        backgroundColor: isHovered ? '#00e3e3' : '#ccc'
      }}
    >
      {isHovered ? '😁' : '☹️'}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
