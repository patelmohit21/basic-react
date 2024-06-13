import React from 'react'

export default function Four() {
    const items = ['Mango', 'Apple', 'Orange', 'Honey', 'Milk', 'Chair']
  return (
    <div>
        <ul>
            {items.map((item,index) => {
              return <li key={index}>{item}</li>
              
            })}
        </ul>
    </div>
  )
}
