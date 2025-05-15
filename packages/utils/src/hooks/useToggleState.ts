import React from 'react';

export default function useToggleState(initialState = false) {
  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle] as const;
}
