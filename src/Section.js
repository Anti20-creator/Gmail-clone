import React from 'react'
import './Section.css'

function Section({ Icon, text, color, selected }) {
    return (
        <div className={`section ${selected && 'section--selected'}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
            }}>
            <Icon />
            <h4>{text}</h4>
        </div>
    )
}

export default Section
