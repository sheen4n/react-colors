import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundedActions = Object.keys(actions).reduce((result, key) => {
      return { ...result, [key]: actions[key](dispatch) };
    }, {});

    return (
      <Context.Provider value={{ state, ...boundedActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
