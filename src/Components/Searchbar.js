import React, { useState } from 'react'

export default function Searchbar({items}) {

    const [seachTerms, setSearchTerms] = useState('');

    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(seachTerms.toLowerCase())
    )

  return (
    <div>
        <input type='text' placeholder='search...' onChange={(e) => setSearchTerms(e.target.value)}/>
        <ul>
            {filteredItems.map((item,index)=>(
                <li key={index}>
                     {item}
                </li>
            ))}
        </ul>
    </div>
  )
}
