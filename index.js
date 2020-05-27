//Toggle state variant

import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
}
export default useToggle;

/*---------------------------------------------------------------------------*/

//Toggle state with unique true/false functions
import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggleOpen = useCallback(() => setState(state => true), []);
  const toggleClose = useCallback(() => setState(state => false), []);

  return [state, toggleOpen, toggleClose];
}
export default useToggle;
