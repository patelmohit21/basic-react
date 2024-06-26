import React from 'react'
import { useTheme } from './ThemeContext';
import './Components/Styles/Theme.css';

export default function ThemeComp() {
    const {isDarkMode} = useTheme();
    const themeClass = isDarkMode ?  'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
    <p>This Components used selected theme</p>

    </div>
  )
}
