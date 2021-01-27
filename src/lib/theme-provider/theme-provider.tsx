import React, { useEffect, useState } from 'react'
import { setCssVars, getSchemaId } from './set-css-vars'

export const ThemeContext = React.createContext({} as any)

export const ThemeProvider = (props: any) => {
  const [themeSchemaId, setSchemaId] = useState(getSchemaId())

  useEffect(() => {
    localStorage.theme = themeSchemaId
    setCssVars()
  }, [themeSchemaId])

  const value = { themeSchemaId, setSchemaId }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}
