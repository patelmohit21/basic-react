import React, { useState } from 'react'

export default function Five() {
    const [isToggled, setIsTogges] = useState(false);

    const handletoggled = () => {
        setIsTogges(!isToggled);
    }

  return (
    <div>
    
        <label>
            <input type='checkbox' onChange={handletoggled}/>
        </label>
        <p>{isToggled ? 'On' : 'Off'}</p>
    </div>
  )
}
