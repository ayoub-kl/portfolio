/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useContext,useState } from 'react'

const skillContext = createContext()
const skillDispatchContext = createContext()


export default ({ children }) => {
  const [state, dispatch] = useState(false)
// console.log(state)
  return (
    <skillDispatchContext.Provider
      value={{
        dispatchSkill: dispatch,
      }}
    >
      <skillContext.Provider
        value={{
          isBarShown: state,
        }}
      >
        {children}
      </skillContext.Provider>
    </skillDispatchContext.Provider>
  )
}

export const useSkill = () => useContext(skillContext)
export const useDispatchSkill = () => useContext(skillDispatchContext)
