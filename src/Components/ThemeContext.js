import { Children, createContext, useContext, useState } from "react";


const ThemeContext = createContext();

const ThemeProvider = ({Children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        isDarkMode((prevMode) => !prevMode)
    };
    return (
        <ThemeContext.Provider value={(isDarkMode,toggleTheme)}>
            {Children}
        </ThemeContext.Provider>
    );
};
  

const useTheme = () => {
    return useContext(ThemeContext);
}

export {useTheme, ThemeProvider}