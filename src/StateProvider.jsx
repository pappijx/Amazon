// setting data layer for basket funtionality(for item tracking in basket)
import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//to use in a component
export const useStateValue = () => useContext(StateContext);
