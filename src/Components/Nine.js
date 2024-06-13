import React, { useState } from 'react';

export default function Nine() {
    const [outerBackgroundColor, setOuterBackgroundColor] = useState('yellow');
    const [innerBackgroundColor, setInnerBackgroundColor] = useState('black');

    const handleClick = () => {
        const newOuterColour = outerBackgroundColor === 'white' ? 'blue' : 'white';
        const newInnerColour = innerBackgroundColor === 'black' ? 'red' : 'black';
        setOuterBackgroundColor(newOuterColour);
        setInnerBackgroundColor(newInnerColour);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: outerBackgroundColor,
                width: '300px',
                height: '300px',
                cursor: 'pointer',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    backgroundColor: innerBackgroundColor,
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                }}
            >
                Click me to Change the colour
            </div>
        </div>
    );
}
