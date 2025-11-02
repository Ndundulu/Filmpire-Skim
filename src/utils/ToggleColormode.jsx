import React, {useState, useMemo, createContext}from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext();


const ToggleColormode = ({children}) => {
    const [mode, setMode] = useState('dark');
    const toggleColorMode = () => {
        setMode((preMode) => preMode === 'light'? 'dark' : 'light')
    };
    const theme = useMemo(() => createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === 'dark' ? "#FFD700" : "#008080"
                    }

                },
            }
        ),
        [mode]
    );
  return (
    <ColorModeContext.Provider value={{mode, setMode, toggleColorMode}}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColormode;
