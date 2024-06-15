import React, { useState } from 'react'

export default function () {

    const {isDarkMode,toggleTheme} = useState();
  return (
    <div>
        <label>
            <input type='checkBox' checked={isDarkMode} onChange={toggleTheme}/>
            Dark Mode
        </label>
    </div>
  )
}
